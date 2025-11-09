# ✨ Click Spark Animation

Magical spark particles that burst outward from every click!

## 📁 Files

- **`src/components/ClickSpark.tsx`** - Main component
- **Integrated in `App.tsx`** - Active on all pages

## ✨ Features

### Core Functionality
- ✅ Sparks burst outward on every click
- ✅ 8 particles per click in a radial pattern
- ✅ Uses your mystical color scheme
- ✅ Smooth animations with Framer Motion
- ✅ Auto-cleanup after animation completes
- ✅ No performance impact (efficient particle management)

### Visual Effects
- 💛 **Golden sparks** - Primary color
- 💜 **Purple sparks** - Secondary color  
- 💚 **Mint green sparks** - Accent color
- ✨ Random size variation (4-8px)
- 🌟 Glowing box-shadow for each particle
- 💫 Scale and fade-out animation

## 🎨 Color Palette

Matches your mystical theme:
- `#E8C14B` - Golden (highlight)
- `#9B4CC2` - Purple (accent)
- `#46E2A1` - Mint green (glow)

## 🎯 How It Works

### Click Detection
```typescript
window.addEventListener("click", handleClick);
```
Listens for all clicks globally across the app.

### Particle Creation
For each click, creates 8 sparks in a circular pattern:
```typescript
angle: (360 / sparkCount) * i  // Evenly distributed
```

### Animation
Each spark:
1. **Starts** at click position (scale: 0)
2. **Explodes** outward 40-60px
3. **Scales** up then down
4. **Fades** out over 0.6 seconds
5. **Auto-removes** from DOM

### Math Behind the Burst
```typescript
x: Math.cos((angle * Math.PI) / 180) * distance
y: Math.sin((angle * Math.PI) / 180) * distance
```
Creates perfect radial distribution.

## ⚙️ Customization

### Number of Sparks
Edit in `ClickSpark.tsx`:
```typescript
const sparkCount = 8; // Change this number
```

### Spark Distance
```typescript
x: Math.cos(angle) * (40 + Math.random() * 20)
//                     ↑ min  ↑ random range
```

### Animation Duration
```typescript
transition={{
  duration: 0.6, // Change duration (seconds)
  ease: "easeOut",
}}
```

### Colors
Add or modify colors:
```typescript
const colors = [
  "#E8C14B", // Golden
  "#9B4CC2", // Purple
  "#46E2A1", // Mint green
  "#YOUR_COLOR", // Add more!
];
```

### Spark Size
```typescript
size: 4 + Math.random() * 4
//    ↑ min   ↑ random range
```

## 🎮 Usage

The component is globally active! Just click anywhere:
- Landing page ✅
- Dashboard ✅
- Buttons ✅
- Empty space ✅

Every click creates a magical burst! 🎆

## 🛠️ Technical Details

### Animation Library
Uses Framer Motion's `AnimatePresence` for:
- Smooth enter/exit animations
- Automatic cleanup
- Optimized performance

### Z-Index
```typescript
z-[10000]
```
Above everything (including broom cursor at 9999) so sparks are always visible.

### Pointer Events
```typescript
pointer-events: none
```
Sparks don't interfere with clicks or interactions.

### Performance
- Sparks auto-remove after 600ms
- No memory leaks
- Efficient state management
- GPU-accelerated animations

## 🎨 Animation Sequence

```
Click → Create 8 sparks
  ↓
Scale: 0 → 1 → 0.8 → 0
Opacity: 1 → 1 → 0.5 → 0
Position: center → radius
  ↓
Remove after 0.6s
```

## 💡 Tips

### Make It More Subtle
- Reduce `sparkCount` to 4-6
- Reduce distance to 30-40px
- Shorten duration to 0.4s

### Make It More Dramatic
- Increase `sparkCount` to 12-16
- Increase distance to 60-80px
- Add more color variations

### Change Pattern
Instead of radial, try:
```typescript
// Random directions
angle: Math.random() * 360

// Upward burst
angle: -90 + (Math.random() * 60 - 30)
```

## 🐛 Troubleshooting

### Sparks not appearing?
1. Check browser console for errors
2. Verify component is imported in `App.tsx`
3. Ensure z-index isn't being overridden

### Performance issues?
1. Reduce `sparkCount` (try 4-6)
2. Increase cleanup timeout (currently 600ms)
3. Reduce `duration` (try 0.4s)

### Sparks behind other elements?
1. Check z-index is `z-[10000]`
2. Verify `pointer-events: none` is applied
3. Ensure parent has proper stacking context

## 📝 Notes

- Works on both landing page and dashboard
- Complements the broom cursor trail
- Matches your mystical color scheme
- No external dependencies (uses existing Framer Motion)
- Mobile-friendly (works with touch events)

---

**Click anywhere to create magic! ✨🎆**

