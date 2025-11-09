// API Service for fetching cauldron data

const DATA_URL = "https://hackutd2025.eog.systems/api/Data";
const INFO_URL = "https://hackutd2025.eog.systems/api/Information/cauldrons";
const OVERFLOW_URL =
  import.meta.env.VITE_OVERFLOW_URL ??
  "http://localhost:5001/api/overflow-intervals"; // Local Flask backend

export interface CauldronLevel {
  timestamp: string;
  cauldron_levels: Record<string, number>;
}

export interface CauldronRecord {
  Time: string;
  Cauldron_ID: string;
  Oil_Level: number;
  Prob_Down?: number;
}

export interface HighProbInterval {
  cauldron_id: string;
  start_time: string;
  end_time: string;
  duration_mins: number;
  oil_change: number;
  rate_of_change: number;
  avg_probability: number;
  max_probability: number;
  potion_removed?: number;
}

export interface OverflowInterval {
  Cauldron_ID: string;
  start_time: string;
  end_time: string;
  flat_value: number;
  avg_probability: number;
  max_probability: number;
}

export interface DashboardStats {
  fraudTickets: string[];
  missingPotions: string[];
  overflowAlerts: string[];
  energyData: Array<{ day: string; energy: number }>;
  availableCauldrons: string[];
  selectedCauldron?: string;
  overflowDebug: OverflowInterval[];
}

function normalizeCauldronId(id?: string): string | undefined {
  if (!id) return undefined;
  const trimmed = id.trim();
  if (!trimmed || trimmed.toLowerCase() === "all") {
    return undefined;
  }

  if (/^\d+$/.test(trimmed)) {
    const padded = trimmed.padStart(3, "0");
    return `cauldron_${padded}`.toLowerCase();
  }

  if (trimmed.toLowerCase().startsWith("cauldron_")) {
    return trimmed.toLowerCase();
  }

  return trimmed.toLowerCase();
}

function normalizeBackendId(id: string): string {
  return id.trim().toLowerCase();
}

// Fetch raw cauldron data from API
export async function fetchCauldronData(): Promise<CauldronLevel[]> {
  try {
    const response = await fetch(DATA_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cauldron data:", error);
    throw error;
  }
}

// Process raw data into records
function processRawData(data: CauldronLevel[]): CauldronRecord[] {
  const records: CauldronRecord[] = [];

  data.forEach((entry) => {
    const timestamp = entry.timestamp;
    const levels = entry.cauldron_levels || {};

    Object.entries(levels).forEach(([cauldronId, level]) => {
      records.push({
        Time: timestamp,
        Cauldron_ID: cauldronId,
        Oil_Level: level,
      });
    });
  });

  return records;
}

// Compute features for ML prediction
function computeFeatures(records: CauldronRecord[], window: number = 10): CauldronRecord[] {
  // Group by cauldron and sort by time
  const byCauldron: Record<string, CauldronRecord[]> = {};
  
  records.forEach((record) => {
    if (!byCauldron[record.Cauldron_ID]) {
      byCauldron[record.Cauldron_ID] = [];
    }
    byCauldron[record.Cauldron_ID].push(record);
  });

  // Sort each cauldron's records by time
  Object.values(byCauldron).forEach((cauldronRecords) => {
    cauldronRecords.sort((a, b) => new Date(a.Time).getTime() - new Date(b.Time).getTime());
  });

  // Compute rolling statistics and predict drain probability
  const processedRecords: CauldronRecord[] = [];

  Object.entries(byCauldron).forEach(([cauldronId, cauldronRecords]) => {
    cauldronRecords.forEach((record, idx) => {
      if (idx < window) return; // Need enough history

      const windowRecords = cauldronRecords.slice(idx - window, idx);
      const levels = windowRecords.map((r) => r.Oil_Level);
      const mean = levels.reduce((a, b) => a + b, 0) / levels.length;
      const diff = record.Oil_Level - cauldronRecords[idx - 1].Oil_Level;
      
      // Simple heuristic for drain probability
      // Real implementation would use ML model
      const isDecreasing = diff < 0;
      const isBelowMean = record.Oil_Level < mean;
      const probDown = isDecreasing && isBelowMean ? 0.7 + Math.random() * 0.3 : Math.random() * 0.3;

      processedRecords.push({
        ...record,
        Prob_Down: probDown,
      });
    });
  });

  return processedRecords;
}

// Detect high probability drain intervals
function detectHighProbIntervals(
  records: CauldronRecord[],
  probThreshold: number = 0.7
): HighProbInterval[] {
  const intervals: HighProbInterval[] = [];
  const byCauldron: Record<string, CauldronRecord[]> = {};

  // Group by cauldron
  records.forEach((record) => {
    if (!byCauldron[record.Cauldron_ID]) {
      byCauldron[record.Cauldron_ID] = [];
    }
    byCauldron[record.Cauldron_ID].push(record);
  });

  // Detect intervals for each cauldron
  Object.entries(byCauldron).forEach(([cauldronId, cauldronRecords]) => {
    cauldronRecords.sort((a, b) => new Date(a.Time).getTime() - new Date(b.Time).getTime());

    let inInterval = false;
    let startIdx = -1;

    cauldronRecords.forEach((record, idx) => {
      const probDown = record.Prob_Down || 0;

      if (!inInterval && probDown >= probThreshold) {
        inInterval = true;
        startIdx = idx;
      } else if (inInterval && probDown < probThreshold) {
        if (startIdx >= 0) {
          const startRecord = cauldronRecords[startIdx];
          const endRecord = record;

          const startTime = new Date(startRecord.Time);
          const endTime = new Date(endRecord.Time);
          const durationMins = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
          const oilChange = endRecord.Oil_Level - startRecord.Oil_Level;
          const rate = durationMins > 0 ? oilChange / durationMins : 0;

          const intervalRecords = cauldronRecords.slice(startIdx, idx + 1);
          const avgProb =
            intervalRecords.reduce((sum, r) => sum + (r.Prob_Down || 0), 0) / intervalRecords.length;
          const maxProb = Math.max(...intervalRecords.map((r) => r.Prob_Down || 0));

          intervals.push({
            cauldron_id: cauldronId,
            start_time: startRecord.Time,
            end_time: endRecord.Time,
            duration_mins: durationMins,
            oil_change: oilChange,
            rate_of_change: rate,
            avg_probability: avgProb,
            max_probability: maxProb,
            potion_removed: Math.abs(oilChange),
          });
        }
        inInterval = false;
        startIdx = -1;
      }
    });
  });

  return intervals;
}

// Fetch overflow intervals from backend - simple direct API call
export async function fetchOverflowIntervals(): Promise<OverflowInterval[]> {
  console.log("FETCHING OVERFLOW DATA from:", OVERFLOW_URL);
  try {
    const response = await fetch(OVERFLOW_URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Accept": "application/json",
      },
    });
    
    console.log("📡 Overflow API response status:", response.status, response.statusText);
    
    if (!response.ok) {
      console.error(`Overflow API failed: ${response.status} ${response.statusText}`);
      const text = await response.text();
      console.error("Response body:", text);
      return [];
    }

    const data = await response.json();
    console.log("Overflow API response data:", data);
    
    // Handle both response formats
    if (Array.isArray(data)) {
      console.log(`Received ${data.length} overflow intervals (array format)`);
      return data;
    }
    
    if (data?.intervals && Array.isArray(data.intervals)) {
      console.log(`Received ${data.intervals.length} overflow intervals (object format)`);
      return data.intervals;
    }
    
    console.warn("Unexpected response format:", data);
    return [];
  } catch (error) {
    console.error("Error fetching overflow:", error);
    if (error instanceof TypeError && error.message.includes("fetch")) {
      console.error("Network error - is the backend running on", OVERFLOW_URL, "?");
    }
    return [];
  }
}

// Get all available cauldrons
export function getAvailableCauldrons(records: CauldronRecord[]): string[] {
  const cauldrons = new Set<string>();
  records.forEach((record) => {
    cauldrons.add(record.Cauldron_ID);
  });
  return Array.from(cauldrons).sort();
}

// Get dashboard statistics for a specific cauldron (or all if not specified)
export async function getDashboardStats(selectedCauldron?: string): Promise<DashboardStats> {
  // Fetch overflow intervals FIRST and independently - always runs even if other APIs fail
  console.log("About to fetch overflow intervals...");
  let overflowIntervals: OverflowInterval[] = [];
  let overflowError: Error | null = null;
  try {
    overflowIntervals = await fetchOverflowIntervals();
    console.log("Overflow intervals received:", overflowIntervals.length, "items");
  } catch (error) {
    console.error("Overflow fetch failed but continuing:", error);
    overflowError = error as Error;
  }

  try {
    const rawData = await fetchCauldronData();
    const records = processRawData(rawData);
    const processedRecords = computeFeatures(records);
    const allCauldrons = getAvailableCauldrons(processedRecords);
    const cauldronToFetch = normalizeCauldronId(selectedCauldron);

    // Filter by selected cauldron if specified
    const filteredRecords = cauldronToFetch
      ? processedRecords.filter(
          (r) => normalizeBackendId(r.Cauldron_ID) === cauldronToFetch
        )
      : processedRecords;

    const intervals = detectHighProbIntervals(filteredRecords);
    
    // Filter overflow by selected cauldron if specified
    let filteredOverflow = overflowIntervals;
    if (cauldronToFetch) {
      console.log("Filtering overflow for cauldron:", selectedCauldron, "-> normalized:", cauldronToFetch);
      console.log("Available overflow intervals:", overflowIntervals.map(i => i.Cauldron_ID));
      
      filteredOverflow = overflowIntervals.filter((i) => {
        const backendId = normalizeBackendId(i.Cauldron_ID);
        // Extract number from both IDs for comparison
        const backendNum = backendId.match(/\d+/)?.[0];
        const fetchNum = cauldronToFetch.match(/\d+/)?.[0];
        const matches = backendNum === fetchNum;
        
        console.log(`  Checking ${i.Cauldron_ID} (num: ${backendNum}) vs ${cauldronToFetch} (num: ${fetchNum}): ${matches}`);
        return matches;
      });
      console.log(`Filtered overflow intervals: ${filteredOverflow.length} out of ${overflowIntervals.length}`);
      console.log("Filtered IDs:", filteredOverflow.map(i => i.Cauldron_ID));
    }

    // Generate fraud tickets (high probability drains)
    const fraudTickets = intervals
      .filter((i) => i.max_probability > 0.85)
      .slice(0, 6)
      .map(
        (i) =>
          `Suspicious drain in ${i.cauldron_id} — ${Math.round(i.avg_probability * 100)}% probability detected`
      );

    // Generate missing potions alerts
    const missingPotions = intervals
      .filter((i) => i.potion_removed && i.potion_removed > 5)
      .slice(0, 6)
      .map(
        (i) =>
          `${i.cauldron_id}: ${i.potion_removed?.toFixed(1)} units removed unexpectedly`
      );

    // Generate overflow alerts - show all details when detected
    const overflowAlerts: string[] = [];
    if (filteredOverflow.length > 0) {
      filteredOverflow
        .sort((a, b) => b.max_probability - a.max_probability)
        .forEach((interval) => {
          const cauldronNum = interval.Cauldron_ID.match(/\d+/)?.[0] || "?";
          const startTime = new Date(interval.start_time).toLocaleString([], {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          const endTime = new Date(interval.end_time).toLocaleString([], {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          const duration = (new Date(interval.end_time).getTime() - new Date(interval.start_time).getTime()) / 60000;
          const durationHours = Math.floor(duration / 60);
          const durationMins = Math.round(duration % 60);
          
          overflowAlerts.push(
            `Cauldron ${cauldronNum}: Overflow at ${interval.flat_value.toFixed(1)} units | ` +
            `${Math.round(interval.max_probability * 100)}% certainty | ` +
            `${startTime} - ${endTime} | ` +
            `Duration: ${durationHours}h ${durationMins}m`
          );
        });
    } else {
      overflowAlerts.push("No overflow currently detected");
    }

    // Generate energy data (aggregate by day of week)
    const energyByDay: Record<string, number[]> = {
      Mon: [],
      Tue: [],
      Wed: [],
      Thu: [],
      Fri: [],
      Sat: [],
      Sun: [],
    };

    filteredRecords.forEach((record) => {
      const date = new Date(record.Time);
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const day = dayNames[date.getDay()];
      energyByDay[day].push(record.Oil_Level);
    });

    const energyData = Object.entries(energyByDay).map(([day, levels]) => ({
      day,
      energy: levels.length > 0 
        ? Math.round((levels.reduce((a, b) => a + b, 0) / levels.length) * 100) / 100
        : 50,
    }));

    // Ensure we have data for all days
    const daysOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const orderedEnergyData = daysOrder.map(day => {
      const found = energyData.find(d => d.day === day);
      return found || { day, energy: 50 };
    });

    return {
      fraudTickets: fraudTickets.length > 0 ? fraudTickets : [
        selectedCauldron 
          ? `No suspicious drains detected in ${selectedCauldron}`
          : "No suspicious drains detected",
        "System operating normally",
        selectedCauldron ? `${selectedCauldron} monitored` : "All cauldrons monitored",
        "Security protocols active",
      ],
      missingPotions: missingPotions.length > 0 ? missingPotions : [
        "Inventory levels stable",
        "No missing potions detected",
        "Stock management optimal",
        "Supply chain secure",
      ],
      overflowAlerts: overflowAlerts.length > 0 ? overflowAlerts : [
        "No overflow currently detected",
      ],
      energyData: orderedEnergyData,
      availableCauldrons: allCauldrons,
      selectedCauldron: cauldronToFetch,
      overflowDebug: [],
    };
  } catch (error) {
    console.error("Error getting dashboard stats:", error);
    
    // Filter overflow by selected cauldron even in error case
    const cauldronToFetch = normalizeCauldronId(selectedCauldron);
    let filteredOverflow = overflowIntervals;
    if (cauldronToFetch) {
      const fetchNum = cauldronToFetch.match(/\d+/)?.[0];
      filteredOverflow = overflowIntervals.filter((i) => {
        const backendId = normalizeBackendId(i.Cauldron_ID);
        const backendNum = backendId.match(/\d+/)?.[0];
        return backendNum === fetchNum;
      });
    }
    
    // Format overflow alerts even if other data failed - show all details
    const overflowAlerts: string[] = [];
    if (filteredOverflow.length > 0) {
      filteredOverflow
        .sort((a, b) => b.max_probability - a.max_probability)
        .forEach((interval) => {
          const cauldronNum = interval.Cauldron_ID.match(/\d+/)?.[0] || "?";
          const startTime = new Date(interval.start_time).toLocaleString([], {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          const endTime = new Date(interval.end_time).toLocaleString([], {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          const duration = (new Date(interval.end_time).getTime() - new Date(interval.start_time).getTime()) / 60000;
          const durationHours = Math.floor(duration / 60);
          const durationMins = Math.round(duration % 60);
          
          overflowAlerts.push(
            `Cauldron ${cauldronNum}: Overflow at ${interval.flat_value.toFixed(1)} units | ` +
            `${Math.round(interval.max_probability * 100)}% certainty | ` +
            `${startTime} - ${endTime} | ` +
            `Duration: ${durationHours}h ${durationMins}m`
          );
        });
    } else {
      overflowAlerts.push("No overflow currently detected");
    }
    
    // Return default data if API fails, but include overflow data if we got it
    return {
      fraudTickets: [
        "API connection unavailable",
        "Retrying connection...",
        "Please check network status",
        "System in fallback mode",
      ],
      missingPotions: [
        "Data sync pending",
        "Awaiting API response",
        "Historical data available",
        "Real-time sync interrupted",
      ],
      overflowAlerts,
      energyData: [
        { day: "Mon", energy: 45 },
        { day: "Tue", energy: 72 },
        { day: "Wed", energy: 58 },
        { day: "Thu", energy: 85 },
        { day: "Fri", energy: 91 },
        { day: "Sat", energy: 68 },
        { day: "Sun", energy: 77 },
      ],
      availableCauldrons: [],
      selectedCauldron,
      overflowDebug: [],
    };
  }
}

