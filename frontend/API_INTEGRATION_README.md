# 🔗 API Integration - Backend to Frontend

Successfully integrated live cauldron data from the backend API into the Mystic Dashboard!

## 📁 Files Created/Modified

### New Files:
- **`src/services/api.ts`** - API service layer for fetching and processing data

### Modified Files:
- **`src/pages/MysticDashboard.tsx`** - Updated to use real API data

## 🌐 API Endpoints

The dashboard connects to these backend endpoints:

```typescript
DATA_URL = "https://hackutd2025.eog.systems/api/Data"
INFO_URL = "https://hackutd2025.eog.systems/api/Information/cauldrons"
```

## 🔄 Data Flow

```
Backend API
    ↓
fetchCauldronData()
    ↓
processRawData()
    ↓
computeFeatures()
    ↓
detectHighProbIntervals()
    ↓
getDashboardStats()
    ↓
MysticDashboard Component
```

## 📊 Data Types

### CauldronLevel (API Response)
```typescript
{
  timestamp: string;
  cauldron_levels: Record<string, number>;
}
```

### CauldronRecord (Processed)
```typescript
{
  Time: string;
  Cauldron_ID: string;
  Oil_Level: number;
  Prob_Down?: number;
}
```

### HighProbInterval (Analyzed)
```typescript
{
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
```

### DashboardStats (Final Output)
```typescript
{
  fraudTickets: string[];
  missingPotions: string[];
  overflowAlerts: string[];
  energyData: Array<{ day: string; energy: number }>;
}
```

## 🧮 Data Processing

### 1. Raw Data Processing
Converts API response into normalized records:
```typescript
processRawData(data: CauldronLevel[]): CauldronRecord[]
```
- Flattens nested cauldron levels
- Creates one record per cauldron per timestamp

### 2. Feature Computation
Calculates rolling statistics and drain probability:
```typescript
computeFeatures(records: CauldronRecord[], window: number = 10)
```
- Groups by cauldron
- Sorts by time
- Computes rolling mean
- Estimates drain probability using:
  - Level decrease detection
  - Comparison to rolling mean
  - Heuristic: `isDecreasing && isBelowMean ? 0.7-1.0 : 0.0-0.3`

### 3. Interval Detection
Identifies high-probability drain events:
```typescript
detectHighProbIntervals(records: CauldronRecord[], probThreshold: number = 0.7)
```
- Finds continuous periods where `Prob_Down >= 0.7`
- Calculates duration, oil change, rate of change
- Computes average and max probability
- Estimates potion removed

### 4. Dashboard Stats Generation
Transforms intervals into user-friendly messages:
```typescript
getDashboardStats(): Promise<DashboardStats>
```

**Fraud Tickets:**
- High probability drains (> 85%)
- Example: "Suspicious drain in Cauldron_A — 92% probability detected"

**Missing Potions:**
- Large volume changes (> 5 units)
- Example: "Cauldron_B: 12.3 units removed unexpectedly"

**Overflow Alerts:**
- Rapid rate changes (> 0.5 units/min)
- Example: "Cauldron_C drain rate critical: 0.87 units/min"

**Energy Data:**
- Aggregates oil levels by day of week
- Maps to graph visualization

## 🔄 Auto-Refresh System

### Dashboard Updates
```typescript
useEffect(() => {
  fetchData();
  // Auto-refresh every 30 seconds
  const interval = setInterval(fetchData, 30000);
  return () => clearInterval(interval);
}, []);
```

### Manual Refresh
New "Refresh" button in header with spinning icon during load:
```tsx
<GlassButton onClick={fetchData} disabled={isLoading}>
  <RefreshCw className={isLoading ? 'animate-spin' : ''} />
  <span>Refresh</span>
</GlassButton>
```

## ✨ Features

### 🔄 Live Data
- Fetches real cauldron data from API
- Updates every 30 seconds automatically
- Manual refresh button available

### 📡 Loading States
- Shows "Loading..." messages while fetching
- Disabled refresh button during load
- Spinning refresh icon animation

### ⚠️ Error Handling
- Falls back to placeholder data if API fails
- Console logs errors for debugging
- Continues to function in offline mode

### 🕐 Last Update Timestamp
Shows when data was last refreshed:
```
Last updated: 10:45:23 AM
```

### 📊 Real-time Statistics
- **Fraud Tickets**: Detects suspicious drain patterns
- **Missing Potions**: Tracks unexpected volume loss
- **Overflow Alerts**: Monitors rapid rate changes
- **Energy Graph**: Visualizes weekly trends

## 🎨 UI Integration

### Before (Hardcoded):
```typescript
const fraudTickets = [
  "Suspicious Brew ID #124 - Double Eye of Newt found",
  // ... static data
];
```

### After (Live API):
```typescript
const fraudTickets = dashboardData?.fraudTickets || [
  "Loading cauldron data...",
  "Connecting to sensors...",
];
```

## 🚀 Usage

The API integration is automatic! Simply:

1. **Open Dashboard** - Data fetches immediately
2. **Wait for Load** - Shows loading messages
3. **View Live Data** - Real cauldron statistics displayed
4. **Auto-Updates** - Refreshes every 30 seconds
5. **Manual Refresh** - Click refresh button anytime

## 🔧 Configuration

### Refresh Interval
Change auto-refresh frequency:
```typescript
const interval = setInterval(fetchData, 30000); // 30 seconds
```

### Probability Threshold
Adjust drain detection sensitivity:
```typescript
detectHighProbIntervals(processedRecords, 0.7) // 70% threshold
```

### Alert Filters
Customize which alerts to show:
```typescript
// Fraud Tickets: max_probability > 85%
.filter((i) => i.max_probability > 0.85)

// Missing Potions: potion_removed > 5 units
.filter((i) => i.potion_removed && i.potion_removed > 5)

// Overflow Alerts: rate_of_change > 0.5 units/min
.filter((i) => Math.abs(i.rate_of_change) > 0.5)
```

## 📝 API Response Example

### Raw API Data:
```json
[
  {
    "timestamp": "2025-11-09T10:30:00Z",
    "cauldron_levels": {
      "Cauldron_A": 45.2,
      "Cauldron_B": 78.5,
      "Cauldron_C": 62.1
    }
  }
]
```

### Processed Dashboard Stats:
```json
{
  "fraudTickets": [
    "Suspicious drain in Cauldron_A — 92% probability detected",
    "Invalid cauldron refill detected in Cauldron_B"
  ],
  "missingPotions": [
    "Cauldron_A: 12.3 units removed unexpectedly",
    "Cauldron_C: 8.7 units missing from inventory"
  ],
  "overflowAlerts": [
    "Cauldron_B drain rate critical: 0.87 units/min",
    "Cauldron_A overflow detected at 10:42 AM"
  ],
  "energyData": [
    { "day": "Mon", "energy": 45 },
    { "day": "Tue", "energy": 72 }
  ]
}
```

## 🐛 Troubleshooting

### API Not Responding
- Check network connectivity
- Verify API endpoints are accessible
- Dashboard shows fallback placeholder data

### No Data Displayed
- Check browser console for errors
- Ensure CORS is configured on backend
- Verify API response format matches expected structure

### Incorrect Statistics
- Adjust probability threshold (currently 0.7)
- Increase rolling window size (currently 10)
- Modify alert filters (fraud/missing/overflow)

## 🎯 Next Steps

Potential enhancements:
1. Add WebSocket support for real-time updates
2. Implement caching layer for offline mode
3. Add data visualization filters/date ranges
4. Export statistics to CSV/PDF
5. Add predictive analytics/forecasting
6. Implement alert notifications/sounds
7. Add user preferences for alert thresholds

---

**Status**: ✅ Fully Integrated  
**Auto-Refresh**: ✅ Every 30 seconds  
**Manual Refresh**: ✅ Available  
**Error Handling**: ✅ Graceful fallback  
**Loading States**: ✅ Implemented  

🪄 Live data is now flowing into your mystical dashboard! ✨

