import json
import os
import math
import csv
import heapq
import requests
from collections import defaultdict
from flask import Flask, jsonify

app = Flask(__name__)

# Enable CORS manually (in case flask-cors is not installed)
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

NUM_WITCHES = 6

def parse_duration_to_minutes(duration_str):
    try:
        h, m, s = duration_str.split(':')
        return int(h) * 60 + int(m) + int(s) / 60.0
    except Exception:
        try:
            return float(duration_str)
        except Exception:
            return 0.0


def load_graph_from_api(base_url='https://hackutd2025.eog.systems/api/Information/graph/neighbors/'):
    graph = defaultdict(list)
    nodes = [f'cauldron_{i:03d}' for i in range(1, 13)]

    for node in nodes:
        url = base_url + node
        try:
            resp = requests.get(url, timeout=5)
            resp.raise_for_status()
            neighbors = resp.json()
        except Exception as e:
            raise RuntimeError(f"Failed to fetch neighbors for {node}: {e}")

        for nb in neighbors:
            to = nb.get('to')
            cost = nb.get('cost')
            minutes = parse_duration_to_minutes(cost) if cost is not None else 0.0
            graph[node].append((to, float(minutes)))
            graph[to].append((node, float(minutes)))

    return graph


def dijkstra_all_pairs(graph):
    dists = {}
    for src in graph.keys():
        pq = [(0.0, src)]
        dist = {src: 0.0}
        while pq:
            d, u = heapq.heappop(pq)
            if d > dist.get(u, float('inf')):
                continue
            for v, w in graph.get(u, []):
                nd = d + w
                if nd < dist.get(v, float('inf')):
                    dist[v] = nd
                    heapq.heappush(pq, (nd, v))
        dists[src] = dist
    return dists

def load_daily_production(path_candidates=None):
    if path_candidates is None:
        path_candidates = ['./cauldron_daily_production.csv',
                           os.path.expanduser('~/Downloads/cauldron_daily_production.csv')]
    for p in path_candidates:
        if os.path.exists(p):
            prod = {}
            with open(p, newline='', encoding='utf-8') as csvfile:
                reader = csv.DictReader(csvfile)
                for row in reader:
                    cid = row['Cauldron_ID']
                    prod[cid] = float(row['Daily_Production'])
            return prod
    raise FileNotFoundError('cauldron_daily_production.csv not found in candidates: ' + ','.join(path_candidates))

class Witch:
    def __init__(self, name, start_location, capacity=100.0):
        self.name = name
        self.location = start_location
        self.capacity = capacity
        self.load = 0.0
        self.time = 0.0
        self.last_cauldron_group = None
        self.trips = 0

    def __repr__(self):
        return f"Witch({self.name}, loc={self.location}, load={self.load:.1f}, time={self.time:.1f})"

def cauldron_group(cid):
    mapping1 = {f'cauldron_{i:03d}' for i in [3, 5, 7, 9]}
    mapping2 = {f'cauldron_{i:03d}' for i in [1, 2, 4, 6, 8, 10, 12]}
    if cid in mapping1:
        return 'group1'
    if cid in mapping2:
        return 'group2'
    return None


def travel_time(a, b, dists):
    if a == b:
        return 0.0
    if a == 'market':
        a = 'market_001'
    if b == 'market':
        b = 'market_001'
    if a in dists and b in dists[a]:
        return float(dists[a][b])
    if b in dists and a in dists[b]:
        return float(dists[b][a])
    return float('inf')


def calculate_trip_score(cauldron_id, dists, production, drain_rates, witch_times, 
                         witch_current_time=0.0, cauldron_available_at=None):
    market_time = travel_time('market_001', cauldron_id, dists)
    available = production.get(cauldron_id, 0.0)
    if available <= 0:
        return float('inf')
    
    drain_rate = drain_rates.get(cauldron_id, 1.0)
    time_to_critical = available / drain_rate if drain_rate > 0 else float('inf')
    
    wait_time = 0
    if cauldron_available_at and cauldron_id in cauldron_available_at:
        earliest_arrival = witch_current_time + market_time
        wait_time = max(0, cauldron_available_at[cauldron_id] - earliest_arrival)
        
        if wait_time > min(time_to_critical, 30):
            return float('inf')
        market_time += wait_time
    
    optimal_collection = min(available, 100.0)  # witch capacity is 100
    collection_time = calculate_collection_time(optimal_collection, drain_rate)
    urgency_factor = (drain_rate * available) / 100.0  # normalized by typical capacity
    avg_witch_time = sum(witch_times.values()) / len(witch_times) if witch_times else 0
    max_witch_time = max(witch_times.values()) if witch_times else 0
    balance_factor = (max_witch_time - avg_witch_time) * 0.7  # increased weight
    score = (
        (market_time + collection_time) * 1.5 +  # Base time cost
        (wait_time * 2.0) +                      # Heavily penalize waiting
        (balance_factor * 0.8) +                 # Workload balance
        (-urgency_factor * 1.2) +               # Prioritize urgent collections (negative)
        (1 / optimal_collection * 30)           # Small penalty for low amounts
    )
    
    if time_to_critical < (market_time * 1.5):
        score *= 0.8
        
    return score

def choose_closest_from_market(target_group, production, dists, drain_rates=None, witch_times=None,
                             witch_current_time=0.0, cauldron_available_at=None):
    candidates = [cid for cid, amt in production.items() if amt > 1e-9 and cauldron_group(cid) == target_group]
    if not candidates:
        other_candidates = [cid for cid, amt in production.items() if amt > 1e-9]
        if other_candidates and drain_rates is not None:
            urgent_candidates = []
            for cid in other_candidates:
                drain_rate = drain_rates.get(cid, 1.0)
                amount = production.get(cid, 0.0)
                time_to_critical = amount / drain_rate if drain_rate > 0 else float('inf')
                travel_duration = travel_time('market_001', cid, dists)
                
                if time_to_critical < (travel_duration * 2):
                    urgent_candidates.append(cid)
            
            if urgent_candidates:
                candidates = urgent_candidates
            else:
                candidates = other_candidates
                
    if not candidates:
        return None
    
    if drain_rates is not None and witch_times is not None:
        scored_candidates = []
        for cid in candidates:
            score = calculate_trip_score(cid, dists, production, drain_rates, witch_times,
                                      witch_current_time, cauldron_available_at)
            if score < float('inf'):
                scored_candidates.append((cid, score))
        
        if not scored_candidates:
            return None
            
        scored_candidates.sort(key=lambda x: x[1])
        return scored_candidates[0][0]
    else:
        candidates.sort(key=lambda c: travel_time('market_001', c, dists))
        return candidates[0]


def choose_next_in_group_from(current, group, production, dists):
    candidates = [cid for cid, amt in production.items() if amt > 1e-9 and cauldron_group(cid) == group and cid != current]
    if not candidates:
        return None
    candidates.sort(key=lambda c: dists.get(current, {}).get(c, float('inf')))
    return candidates[0]


def simulate_witches(dists, production, drain_rates=None, max_iterations=10000, verbose=False):
    all_cauldrons = []
    for cid, prod in production.items():
        drain_rate = drain_rates.get(cid, 1.0)
        urgency = drain_rate * prod
        all_cauldrons.append((cid, urgency))
    
    all_cauldrons.sort(key=lambda x: x[1], reverse=True)
    
    cauldron_available_at = defaultdict(float)
    
    witch_times = {i: 0.0 for i in range(NUM_WITCHES)}
    
    if drain_rates is None:
        drain_rates = defaultdict(lambda: 1.0)
    
    group1_cauldrons = []
    group2_cauldrons = []
    
    for cid, _ in all_cauldrons:
        if int(cid.split('_')[1]) % 2 == 1:
            group1_cauldrons.append(cid)
        else:
            group2_cauldrons.append(cid)
            
    total_urgency_g1 = sum(drain_rates.get(cid, 1.0) * production.get(cid, 0.0) for cid in group1_cauldrons)
    total_urgency_g2 = sum(drain_rates.get(cid, 1.0) * production.get(cid, 0.0) for cid in group2_cauldrons)
    
    total_urgency = total_urgency_g1 + total_urgency_g2
    if total_urgency > 0:
        num_in_group1 = max(1, min(len(group1_cauldrons), 
                                round(NUM_WITCHES * total_urgency_g1 / total_urgency)))
    else:
        num_in_group1 = max(1, min(len(group1_cauldrons), 
                                round(NUM_WITCHES * len(group1_cauldrons) / 
                                    (len(group1_cauldrons) + len(group2_cauldrons)))))
    
    num_in_group2 = NUM_WITCHES - num_in_group1
    
    starting_locations = (
        group1_cauldrons[:num_in_group1] +
        group2_cauldrons[:num_in_group2]
    )
    
    witches = []
    for i in range(NUM_WITCHES):
        witch = Witch(f'Witch{i+1}', starting_locations[i])
        witches.append(witch)

    for witch in witches:
        witch.last_cauldron_group = cauldron_group(witch.location)

    events = []

    iter_count = 0
    total_initial = sum(production.values())

    while sum(production.values()) > 1e-6 and iter_count < max_iterations:
        iter_count += 1
        for witch in witches:
            if sum(production.values()) <= 1e-6:
                break

            if witch.location == 'market':
                target_group = 'group1' if witch.last_cauldron_group == 'group2' else 'group2'
                target = choose_closest_from_market(target_group, production, dists)
                if target is None:
                    continue
                t = travel_time('market_001', target, dists)
                witch.time += t
                witch_times[int(witch.name[5:])-1] = witch.time  # Update witch time
                witch.location = target
                events.append((witch.name, witch.time, 'move', target, t, witch.load))
                if verbose:
                    print(f"{witch.name} moved from market to {target} (+{t:.1f} min)")

            if witch.location != 'market':
                loc = witch.location
                available = production.get(loc, 0.0)
                space = witch.capacity - witch.load
                if available <= 1e-9:
                    t = travel_time(loc, 'market_001', dists)
                    witch.time += t
                    witch.location = 'market'
                    witch.last_cauldron_group = cauldron_group(loc)
                    witch.trips += 1
                    witch.load = 0.0
                    witch.time += 15.0
                    events.append((witch.name, witch.time, 'move_to_market_empty', loc, t, witch.load))
                    if verbose:
                        print(f"{witch.name} moved to market from {loc} and unloaded (empty) +{t + 15:.1f} min")
                    continue

                take = min(available, space)
                drain_rate = drain_rates.get(loc, 1.0)
                collection_time = calculate_collection_time(take, drain_rate)
                witch.time += collection_time
                
                production[loc] -= take
                witch.load += take
                events.append((witch.name, witch.time, 'collect', loc, take, witch.load))
                if verbose:
                    print(f"{witch.name} collected {take:.2f} at {loc} (load {witch.load:.1f}/{witch.capacity}, collection time: {collection_time:.1f} min)")

                cauldron_available_at[loc] = witch.time
                
                grp = cauldron_group(loc)
                if grp == 'group2':
                    t = travel_time(loc, 'market_001', dists)
                    witch.time += t
                    witch_index = int(witch.name[5:])-1
                    witch_times[witch_index] = witch.time
                    witch.location = 'market'
                    witch.last_cauldron_group = grp
                    witch.trips += 1
                    witch.time += 15.0
                    witch_times[witch_index] = witch.time
                    events.append((witch.name, witch.time, 'unload', 'market', 0.0, 0.0))
                    witch.load = 0.0
                    if verbose:
                        print(f"{witch.name} returned to market from {loc} (+{t:.1f}) and unloaded (+15.0)")
                    next_target = choose_closest_from_market('group1', production, dists, drain_rates, witch_times,
                                                          witch.time, cauldron_available_at)
                    if next_target is not None:
                        t2 = travel_time('market_001', next_target, dists)
                        witch.time += t2
                        witch_times[witch_index] = witch.time
                        witch.location = next_target
                        events.append((witch.name, witch.time, 'move', next_target, t2, witch.load))
                        if verbose:
                            print(f"{witch.name} moved from market to {next_target} (+{t2:.1f} min)")

                elif grp == 'group1':
                    t = travel_time(loc, 'market_001', dists)
                    witch.time += t
                    witch_index = int(witch.name[5:])-1
                    witch_times[witch_index] = witch.time
                    witch.location = 'market'
                    witch.last_cauldron_group = grp
                    witch.trips += 1
                    witch.time += 15.0
                    witch_times[witch_index] = witch.time
                    events.append((witch.name, witch.time, 'unload', 'market', 0.0, 0.0))
                    witch.load = 0.0
                    if verbose:
                        print(f"{witch.name} returned to market from {loc} (+{t:.1f}) and unloaded (+15.0)")
                    next_target = choose_closest_from_market('group2', production, dists, drain_rates, witch_times,
                                                          witch.time, cauldron_available_at)
                    if next_target is not None:
                        t2 = travel_time('market_001', next_target, dists)
                        witch.time += t2
                        witch_times[witch_index] = witch.time
                        witch.location = next_target
                        events.append((witch.name, witch.time, 'move', next_target, t2, witch.load))
                        if verbose:
                            print(f"{witch.name} moved from market to {next_target} (+{t2:.1f} min)")
                    continue

                else:
                    t = travel_time(loc, 'market_001', dists)
                    witch.time += t
                    witch_index = int(witch.name[5:])-1
                    witch_times[witch_index] = witch.time
                    witch.location = 'market'
                    witch.last_cauldron_group = grp
                    witch.trips += 1
                    witch.time += 15.0
                    witch_times[witch_index] = witch.time
                    witch.load = 0.0
                    events.append((witch.name, witch.time, 'unload_unknown_group', 'market', 0.0, 0.0))

    total_collected = total_initial - sum(production.values())
    return {
        'events': events,
        'remaining_production': production,
        'total_initial': total_initial,
        'total_collected': total_collected,
        'witches': witches,
        'iterations': iter_count,
    }

def write_events_csv(events, path='collection_log.csv'):
    with open(path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['witch', 'time_min', 'action', 'location_or_target', 'value', 'load_after'])
        for e in events:
            writer.writerow(e)

def write_summary_csv(initial_prod, remaining_prod, path='collection_summary.csv'):
    with open(path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Cauldron_ID', 'Initial_Production', 'Remaining_Production', 'Collected'])
        for cid, init in initial_prod.items():
            rem = remaining_prod.get(cid, 0.0)
            writer.writerow([cid, f"{init:.6f}", f"{rem:.6f}", f"{(init - rem):.6f}"])

def generate_schedule(events):
    schedule = []
    witch_initial_positions = {}
    
    for event in events:
        witch_name, time, action, location, _, _ = event
        witch_num = int(witch_name[5:])
        if witch_num not in witch_initial_positions:
            if location == 'market':
                location = 'market_001'
            witch_initial_positions[witch_num] = location
    
    for witch_num, location in witch_initial_positions.items():
        schedule.append({
            "witch_number": witch_num,
            "time": 0.0,
            "node": location
        })
    
    last_locations = witch_initial_positions.copy()
    
    for event in events:
        witch_name, time, action, location, _, _ = event
        witch_num = int(witch_name[5:])
        
        if location == 'market':
            location = 'market_001'
            
        arrival_time = None
        if action == 'move':
            arrival_time = time
        elif action == 'move_to_market_empty':
            arrival_time = time - 15.0
        elif action == 'unload' or action == 'unload_unknown_group':
            arrival_time = time - 15.0

        if arrival_time is not None and last_locations.get(witch_num) != location:
            schedule.append({
                "witch_number": witch_num,
                "time": float(f"{arrival_time:.1f}"),
                "node": location
            })
            last_locations[witch_num] = location
    
    schedule.sort(key=lambda x: (x["time"], x["witch_number"]))
    return schedule

def write_schedule_csv(events, path='witch_schedule.csv'):
    schedule = generate_schedule(events)
    
    with open(path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['witch_number', 'time', 'node'])
        for entry in schedule:
            writer.writerow([entry['witch_number'], f"{entry['time']:.1f}", entry['node']])

@app.route('/api/schedule', methods=['GET'])
def get_schedule():
    try:
        graph = load_graph_from_api('https://hackutd2025.eog.systems/api/Information/graph/neighbors/')
        dists = dijkstra_all_pairs(graph)

        production = load_daily_production(['./cauldron_daily_production.csv', 
                                         os.path.expanduser('~/Downloads/cauldron_daily_production.csv')])
        initial = dict(production)
        drain_rates = get_cauldron_drain_rates()
        result = simulate_witches(dists, production, drain_rates=drain_rates, verbose=False)
        schedule = generate_schedule(result['events'])

        return jsonify({
            "status": "success",
            "schedule": schedule,
            "statistics": {
                "total_initial_production": result['total_initial'],
                "total_collected": result['total_collected'],
                "iterations": result['iterations']
            }
        })

    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

def get_cauldron_drain_rates(path_candidates=None):
    if path_candidates is None:
        path_candidates = ['./cauldron_drain_and_fill_rates.csv',
                         os.path.expanduser('~/Downloads/cauldron_drain_and_fill_rates.csv')]
    
    for p in path_candidates:
        if os.path.exists(p):
            try:
                rates = {}
                with open(p, newline='', encoding='utf-8') as csvfile:
                    reader = csv.DictReader(csvfile)
                    for row in reader:
                        cid = row['Cauldron_ID']
                        rates[cid] = float(row['Median_Rate_Change_units_per_min'])
                return rates
            except Exception as e:
                print(f"Warning: Error reading drain rates from {p}: {e}")
                continue
    
    print("Warning: No valid drain rates file found. Using default rates.")
    return {}

def calculate_collection_time(amount, drain_rate):
    if drain_rate <= 0:
        return 0.0
    return amount / drain_rate

def main():
    try:
        graph = load_graph_from_api('https://hackutd2025.eog.systems/api/Information/graph/neighbors/')
    except Exception as e:
        raise RuntimeError(f"Failed to load graph from API: {e}")
    dists = dijkstra_all_pairs(graph)

    production = load_daily_production(['./cauldron_daily_production.csv', os.path.expanduser('~/Downloads/cauldron_daily_production.csv')])
    initial = dict(production)

    drain_rates = get_cauldron_drain_rates()
    if drain_rates:
        print("Loaded drain rates from CSV:")
        for cid, rate in drain_rates.items():
            print(f"{cid}: {rate:.3f} units/min")
    else:
        print("Warning: Using default drain rates (1.0 units/min)")

    result = simulate_witches(dists, production, drain_rates=drain_rates, verbose=False)

    write_events_csv(result['events'], path='collection_log.csv')
    write_summary_csv(initial, result['remaining_production'], path='collection_summary.csv')
    write_schedule_csv(result['events'], path='witch_schedule.csv')

    print('Simulation complete')
    print(f"Total initial production: {result['total_initial']:.3f}")
    print(f"Total collected: {result['total_collected']:.3f}")
    print(f"Iterations: {result['iterations']}")
    for w in result['witches']:
        print(f"{w.name} time elapsed: {w.time:.1f} minutes, trips: {w.trips}")
    print('Wrote collection_log.csv, collection_summary.csv, and witch_schedule.csv')

if __name__ == '__main__':
    # use --script to just run the file (without api)
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == '--script':
        main()
    else:
        print("Starting API server...")
        app.run(host='0.0.0.0', port=5005)
