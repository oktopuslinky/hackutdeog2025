# Drain Detection Server

Flask API server that provides drain detection and analysis endpoints, converted from the Streamlit app.

## 🚀 Quick Start

### 1. Install Dependencies

All dependencies are already in `requirements.txt`. If you need to reinstall:

```bash
cd backend
pip install -r requirements.txt
```

### 2. Run the Server

```bash
cd backend
python drain_server.py
```

The server will start on `http://localhost:5002` (or the port specified by `PORT` environment variable).

## 📡 API Endpoints

### Health Check
```bash
GET /api/health
```
Returns server status.

### Get All Cauldrons
```bash
GET /api/cauldrons
```
Returns list of available cauldron IDs.

**Response:**
```json
{
  "cauldrons": ["cauldron_001", "cauldron_002", ...]
}
```

### Get Cauldron Time Series
```bash
GET /api/cauldron/<cauldron_id>/timeseries
```
Returns time series data (oil level and drain probability) for a specific cauldron.

**Example:**
```bash
curl http://localhost:5002/api/cauldron/cauldron_001/timeseries
```

**Response:**
```json
{
  "cauldron_id": "cauldron_001",
  "data": [
    {
      "time": "2025-01-15T10:30:00",
      "oilLevel": 45.2,
      "probDown": 0.75
    },
    ...
  ],
  "count": 150
}
```

### Get High Probability Intervals
```bash
GET /api/cauldron/<cauldron_id>/intervals?threshold=0.9
```
Returns high probability drain intervals for a cauldron.

**Query Parameters:**
- `threshold` (optional): Probability threshold (default: 0.9)

**Example:**
```bash
curl http://localhost:5002/api/cauldron/cauldron_001/intervals?threshold=0.85
```

**Response:**
```json
{
  "cauldron_id": "cauldron_001",
  "threshold": 0.85,
  "fill_rate_baseline": 0.0234,
  "intervals": [
    {
      "cauldron_id": "cauldron_001",
      "start_time": "2025-01-15T10:30:00",
      "end_time": "2025-01-15T11:45:00",
      "duration_mins": 75.0,
      "oil_change": -12.5,
      "rate_of_change": -0.167,
      "start_level": 45.2,
      "end_level": 32.7,
      "avg_probability": 0.92,
      "max_probability": 0.98,
      "potion_removed": 14.25,
      "est_drain_rate": 0.19
    },
    ...
  ],
  "count": 3
}
```

### Get Cauldron Statistics
```bash
GET /api/cauldron/<cauldron_id>/stats
```
Returns comprehensive statistics for a cauldron.

**Response:**
```json
{
  "cauldron_id": "cauldron_001",
  "total_records": 150,
  "avg_oil_level": 42.5,
  "min_oil_level": 25.0,
  "max_oil_level": 60.0,
  "avg_prob_down": 0.35,
  "max_prob_down": 0.98,
  "high_prob_intervals": 3,
  "median_rate_change": 0.167,
  "total_oil_change": -25.5,
  "avg_interval_duration": 65.0,
  "fill_rate_baseline": 0.0234
}
```

### Get All Cauldrons Statistics
```bash
GET /api/all-cauldrons/stats
```
Returns statistics for all cauldrons.

**Response:**
```json
{
  "cauldrons": [
    {
      "cauldron_id": "cauldron_001",
      "total_intervals": 3,
      "avg_probability": 0.35,
      "max_probability": 0.98,
      "median_rate_change": 0.167,
      "total_duration": 195.0
    },
    ...
  ]
}
```

### Refresh Cache
```bash
POST /api/refresh
```
Manually refresh the data cache (forces re-fetch and re-train).

**Response:**
```json
{
  "status": "success",
  "message": "Cache refreshed",
  "timestamp": "2025-01-15T12:00:00",
  "records": 1500
}
```

## ⚙️ Configuration

### Environment Variables

- `PORT`: Server port (default: 5002)
- `DATA_URL`: Override the default data API URL

### Caching

The server caches the trained model and processed data for 5 minutes to improve performance. Use the `/api/refresh` endpoint to manually refresh.

## 🔧 Integration with Frontend

Update your frontend API service to use these endpoints:

```typescript
const DRAIN_SERVER_URL = import.meta.env.VITE_DRAIN_SERVER_URL ?? "http://localhost:5002";

export async function getCauldronTimeSeries(cauldronId: string) {
  const response = await fetch(`${DRAIN_SERVER_URL}/api/cauldron/${cauldron_id}/timeseries`);
  return response.json();
}
```

## 🐛 Troubleshooting

1. **Port already in use**: Change the port using `PORT=5003 python drain_server.py`
2. **API fetch fails**: Check your internet connection and verify `DATA_URL` is accessible
3. **Model training fails**: Ensure you have enough data (at least 15 unique timestamps)

## 📝 Notes

- The server runs on port 5002 by default (different from the overflow server on 5001)
- Model is retrained every 5 minutes automatically
- All timestamps are returned in ISO format
- The ML model uses the same logic as the original Streamlit app

