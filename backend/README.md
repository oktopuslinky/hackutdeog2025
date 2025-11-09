# 🧪 Flask Backend for Overflow Detection

This backend service provides overflow interval detection for cauldron monitoring.

## 📁 Files

- **`app.py`** - Flask server with API endpoint
- **`overflow.py`** - Overflow detection logic and data processing
- **`requirements.txt`** - Python dependencies

## 🚀 Running the Backend

### 1. Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2. Start the Flask Server

```bash
python app.py
```

Or with Flask command:
```bash
flask run
```

The server will start on `http://localhost:5000`

## 📡 API Endpoint

### GET `/api/overflow-intervals`

Returns detected overflow intervals for all cauldrons.

**Response Format:**
```json
[
  {
    "Cauldron_ID": "Cauldron_1",
    "start_time": "2025-11-09 10:30:00",
    "end_time": "2025-11-09 10:45:00",
    "flat_value": 100.0,
    "avg_probability": 0.85,
    "max_probability": 0.95
  }
]
```

**Fields:**
- `Cauldron_ID`: Identifier for the cauldron
- `start_time`: When overflow interval started
- `end_time`: When overflow interval ended
- `flat_value`: The stable level during overflow (usually at capacity)
- `avg_probability`: Average overflow probability during interval
- `max_probability`: Maximum overflow probability during interval

## 🔧 Configuration

### Overflow Detection Parameters

In `app.py`, you can adjust:

```python
prob_threshold=0.5    # Probability threshold for overflow detection
at_capacity_only=True # Only detect overflows at max capacity
```

### How It Works

1. **Fetch Data**: Gets cauldron levels from external API
2. **Compute Features**: Calculates rolling statistics, slopes, momentum
3. **Detect Overflow**: Identifies flat intervals at capacity
4. **Probability**: Calculates overflow probability based on:
   - Low slope (stable level)
   - Low standard deviation (not fluctuating)
   - High fullness (near max capacity)

### Overflow Detection Algorithm

From `overflow.py`:

```python
# Heuristic: high probability when both |Slope| and Rolling_Std are small
p_slope = exp(-|slope| / scale)
p_std = exp(-std / scale)
flat_prob = p_slope * p_std

# If near capacity, multiply by capacity factor
if near_capacity:
    cap_factor = (fullness - 0.96) / 0.04
    Prob_Overflow = flat_prob * cap_factor
```

## 🧪 Testing the Endpoint

### Using curl:
```bash
curl http://localhost:5000/api/overflow-intervals
```

### Using Python:
```python
import requests
response = requests.get("http://localhost:5000/api/overflow-intervals")
print(response.json())
```

### Using Browser:
Navigate to: `http://localhost:5000/api/overflow-intervals`

## 🔗 Frontend Integration

The frontend (`frontend/src/services/api.ts`) fetches from this endpoint:

```typescript
const OVERFLOW_URL = "http://localhost:5000/api/overflow-intervals";

const overflowIntervals = await fetchOverflowIntervals();
// Returns array of OverflowInterval objects
```

## 📊 Data Flow

```
External API (hackutd2025.eog.systems)
            ↓
  fetch_api_data() [overflow.py]
            ↓
  compute_features() [rolling stats]
            ↓
  fetch_cauldron_info() [max capacity]
            ↓
  compute_overflow_probability()
            ↓
  detect_high_prob_intervals()
            ↓
  Flask endpoint [/api/overflow-intervals]
            ↓
  Frontend Dashboard [Overflow Alerts]
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 is busy:
```bash
flask run --port 5001
```

Then update frontend `api.ts`:
```typescript
const OVERFLOW_URL = "http://localhost:5001/api/overflow-intervals";
```

### CORS Issues
If frontend can't access the backend, add CORS to `app.py`:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
```

Install flask-cors:
```bash
pip install flask-cors
```

### No Data Returned
- Check if external API is accessible
- Verify threshold settings aren't too high
- Try lowering `prob_threshold` to 0.3 or 0.2

### API Connection Failed
- Ensure Flask server is running
- Check firewall settings
- Verify URL in frontend matches backend port

## 📝 Example Output

```json
[
  {
    "Cauldron_ID": "Cauldron_3",
    "start_time": "2025-11-09 14:23:15",
    "end_time": "2025-11-09 14:38:42",
    "flat_value": 99.8,
    "avg_probability": 0.92,
    "max_probability": 0.98
  },
  {
    "Cauldron_ID": "Cauldron_7",
    "start_time": "2025-11-09 15:10:33",
    "end_time": "2025-11-09 15:22:18",
    "flat_value": 100.0,
    "avg_probability": 0.87,
    "max_probability": 0.94
  }
]
```

## 🎯 Frontend Display

The overflow intervals are displayed in the dashboard's **Overflow Alerts** section:

```
Cauldron_3 overflow at 99.8 units (98% certainty) - 02:23 PM
Cauldron_7 overflow at 100.0 units (94% certainty) - 03:10 PM
```

---

**Status**: ✅ Backend Ready  
**Endpoint**: `http://localhost:5000/api/overflow-intervals`  
**Integration**: ✅ Connected to Frontend  

