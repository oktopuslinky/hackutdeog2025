# 🪄 Whimsical AI Setup Instructions

Complete setup guide for running the Whimsical AI Cauldron Dashboard.

## 📋 Prerequisites

- **Node.js** 16+ (for frontend)
- **Python** 3.8+ (for backend)
- **npm** or **yarn** (package manager)
- **pip** (Python package manager)

## 🎯 Quick Start

### 1. Start the Backend (Flask Server)

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
```

The backend will run on `http://localhost:5000`

**Backend provides:**
- Overflow detection endpoint: `/api/overflow-intervals`

### 2. Start the Frontend (React + Vite)

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install Node dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

### 3. Open Your Browser

Navigate to the URL shown in your terminal (usually `http://localhost:5173`)

## 🏗️ Project Structure

```
hackutdeog2025/
├── backend/
│   ├── app.py              # Flask API server
│   ├── overflow.py         # Overflow detection logic
│   ├── requirements.txt    # Python dependencies
│   └── README.md          # Backend documentation
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx              # Main app component
│   │   ├── pages/
│   │   │   └── MysticDashboard.tsx  # Dashboard page
│   │   ├── services/
│   │   │   └── api.ts           # API integration
│   │   └── components/
│   │       ├── LiquidEther.jsx  # Background animation
│   │       ├── BroomCursor.tsx  # Custom cursor
│   │       ├── ClickSpark.tsx   # Click effects
│   │       └── ui/
│   │           └── glass-button.tsx
│   ├── package.json
│   └── vite.config.ts
│
└── app.py                  # (Streamlit app - optional)
```

## 🔧 Configuration

### Backend Configuration

Edit `backend/app.py` to adjust overflow detection:

```python
prob_threshold=0.5      # Overflow probability threshold (0.0-1.0)
at_capacity_only=True   # Only detect overflows at max capacity
```

### Frontend Configuration

Edit `frontend/src/services/api.ts` for API endpoints:

```typescript
const DATA_URL = "https://hackutd2025.eog.systems/api/Data";
const OVERFLOW_URL = "http://localhost:5000/api/overflow-intervals";
```

## 🎨 Features

### Landing Page
- **Liquid Ether Background**: Interactive WebGL fluid simulation
- **Variable Proximity Text**: "Whimsical AI" text that reacts to mouse
- **Broom Cursor**: Custom witch's broom cursor with particle trail
- **Click Sparks**: Magical particles on every click
- **Glass Dashboard Button**: Glassmorphism-styled button

### Dashboard
- **Cauldron Selector**: Dropdown to view data for 12 individual cauldrons
- **Energy Graph**: Weekly arcane power levels visualization
- **Fraud Tickets**: Suspicious drain detection (high probability events)
- **Missing Potions**: Inventory loss tracking
- **Overflow Alerts**: Real-time overflow detection from backend
- **Auto-Refresh**: Updates every 30 seconds
- **Manual Refresh**: Button to refresh on demand

## 📊 Data Sources

### External API
- **Data Endpoint**: `https://hackutd2025.eog.systems/api/Data`
  - Provides cauldron levels and timestamps
- **Info Endpoint**: `https://hackutd2025.eog.systems/api/Information/cauldrons`
  - Provides cauldron capacity information

### Local Backend
- **Overflow Endpoint**: `http://localhost:5000/api/overflow-intervals`
  - Processes external data to detect overflow events
  - Returns intervals where cauldrons are at capacity

## 🐛 Troubleshooting

### Backend Won't Start

**Issue**: Port 5000 already in use
```bash
# Check what's using port 5000
lsof -i :5000

# Use a different port
flask run --port 5001
```

Then update frontend:
```typescript
const OVERFLOW_URL = "http://localhost:5001/api/overflow-intervals";
```

**Issue**: Missing Python packages
```bash
pip install flask pandas numpy requests
```

### Frontend Won't Start

**Issue**: Dependencies not installed
```bash
cd frontend
rm -rf node_modules
npm install
```

**Issue**: Port already in use
```bash
# Vite will automatically use next available port
# Or specify a port:
npm run dev -- --port 3000
```

### CORS Errors

If you see CORS errors in the browser console:

1. Install flask-cors:
```bash
pip install flask-cors
```

2. Update `backend/app.py`:
```python
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
```

### No Overflow Data

**Issue**: Backend returns empty array

Possible causes:
- External API not returning data
- Threshold too high
- No overflows detected in current data

Solutions:
1. Check backend logs
2. Lower `prob_threshold` to 0.3
3. Set `at_capacity_only=False` to see all flat intervals
4. Test external API directly:
```bash
curl https://hackutd2025.eog.systems/api/Data
```

### Broom Cursor Not Showing

**Issue**: Image not loading

1. Check `/Users/amoghsood/hackutdeog2025/frontend/public/broom.png` exists
2. Clear browser cache
3. Check browser console for 404 errors

## 🚀 Production Build

### Build Frontend

```bash
cd frontend
npm run build
```

This creates optimized files in `frontend/dist/`

### Deploy Backend

For production, use a proper WSGI server like Gunicorn:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 backend.app:app
```

## 📝 Development Tips

### Hot Reload
Both frontend and backend support hot reload:
- Frontend: Vite automatically reloads on file changes
- Backend: Use `flask run --reload` for auto-reload

### Debug Mode
Enable debug mode in `backend/app.py`:
```python
if __name__ == "__main__":
    app.run(debug=True)
```

### Check API Status
```bash
# Test backend
curl http://localhost:5000/api/overflow-intervals

# Test external API
curl https://hackutd2025.eog.systems/api/Data
```

## 🎮 Using the Dashboard

1. **Start Backend**: `cd backend && python app.py`
2. **Start Frontend**: `cd frontend && npm run dev`
3. **Open Browser**: Navigate to `http://localhost:5173`
4. **Click Dashboard**: Click the glass button at bottom
5. **Select Cauldron**: Use dropdown to view specific cauldrons (1-12)
6. **View Data**: 
   - Energy graph shows weekly levels
   - Three boxes show alerts (scrollable)
   - Auto-refreshes every 30 seconds
7. **Manual Refresh**: Click refresh button in top-right
8. **Go Home**: Click home button to return to landing page

## 🎨 Customization

### Change Colors
Edit `frontend/src/index.css`:
```css
:root {
  --color-primary: #3A1F3D;
  --color-secondary: #5C2E7E;
  --color-accent: #9B4CC2;
  --color-highlight: #E8C14B;
  --color-glow: #46E2A1;
  --color-shadow: #1B0F1F;
}
```

### Adjust Overflow Threshold
Edit `backend/app.py`:
```python
prob_threshold=0.7  # Higher = fewer, more certain overflows
```

### Change Auto-Refresh Rate
Edit `frontend/src/pages/MysticDashboard.tsx`:
```typescript
const interval = setInterval(() => fetchData(selectedCauldron), 30000); // 30 seconds
```

## 📚 Documentation

- **Backend**: See `/backend/README.md`
- **Broom Cursor**: See `/frontend/BROOM_CURSOR_README.md`
- **API Integration**: See `/frontend/API_INTEGRATION_README.md`
- **Click Sparks**: See `/frontend/CLICK_SPARK_README.md`
- **Color Scheme**: See `/frontend/COLOR_SCHEME.md`

---

**Status**: ✅ Setup Complete  
**Frontend**: http://localhost:5173  
**Backend**: http://localhost:5000  
**Theme**: 🪄 Mystical Purple & Golden  

