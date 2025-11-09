# 🧹✨ Witch's Broom Cursor Implementation

A magical custom cursor implementation with particle trail effects for your mystical React app!

## 📁 Files Created

1. **`src/components/BroomCursor.tsx`** - Main component
2. **`src/components/broom-cursor.css`** - Styles and animations
3. **`public/broom.png`** - Broom image (placeholder emoji included)

## ✨ Features

### Core Functionality
- ✅ Custom broom cursor that follows mouse movement
- ✅ **Flips horizontally** when changing direction (left/right)
- ✅ Smooth rotation based on movement direction
- ✅ **Real cursor completely hidden** on desktop
- ✅ Magical particle trail with golden/purple/mint particles
- ✅ Performance optimized (max 50 active particles)
- ✅ Desktop-only (falls back to normal cursor on touch devices)
- ✅ Accessibility-friendly (respects `prefers-reduced-motion`)

### Visual Effects
- ✨ Golden glowing particles that fade and shrink
- 💚 Mint green accent particles (every 3rd)
- 💛 Golden accent particles (every 5th)
- 🔮 Soft radial gradients with purple/golden glow shadows
- 🎯 Broom rotates smoothly with movement direction
- 🔄 **Broom flips horizontally** for natural left/right movement

### Performance
- Throttled to ~60fps
- Limited to 50 active particles maximum
- Automatic cleanup of particles after 500ms
- Uses `will-change` for GPU acceleration
- No heavy libraries or dependencies

## 🎨 Customization

### Particle Colors
Edit in `broom-cursor.css`:
```css
.broom-spark {
  background: radial-gradient(...);
  /* Change colors here */
}
```

### Broom Size
Edit in `broom-cursor.css`:
```css
.broom-cursor {
  width: 56px;  /* Adjust size */
  height: 56px;
}
```

### Particle Duration
Edit in `BroomCursor.tsx`:
```typescript
setTimeout(() => {
  particle.remove();
}, 500); // Change duration (ms)
```

### Rotation Pivot Point
Edit in `broom-cursor.css`:
```css
.broom-cursor {
  transform-origin: 20% 50%; /* Adjust pivot */
}
```

## 🖼️ Replacing the Broom Image

The placeholder broom emoji is included, but you can replace it:

1. Create or find a custom broom PNG image
2. Save it as `public/broom.png`
3. Recommended size: 128x128px or 256x256px
4. Use transparent background (PNG)
5. Orient the broom diagonally (↗) for best rotation

**Tip:** The broom rotates around the handle side (left 20%), so design accordingly!

## 🎯 How It Works

### Detection
Uses `window.matchMedia("(pointer: fine)")` to detect:
- ✅ Desktop/laptop with mouse → Enable custom cursor
- ❌ Touch devices/tablets → Use normal cursor

### Rotation & Flip Algorithm
```typescript
const angle = Math.atan2(dy, dx) * (180 / Math.PI);
const flipScale = dx < 0 ? 'scaleX(-1)' : 'scaleX(1)';
broom.style.transform = `${flipScale} rotate(${angle + 45}deg)`;
```
- The +45° offset makes the broom point forward correctly
- `scaleX(-1)` flips the broom when moving left
- Creates more natural movement and directionality

### Particle Creation
- Spawned on mouse move (throttled to ~60fps)
- Positioned slightly behind movement direction
- Random size variation (6-12px)
- Auto-removed after fade animation

## 🛠️ Technical Details

### Browser Support
- Modern browsers with CSS backdrop-filter
- Pointer Events API
- CSS animations
- Media queries

### Accessibility
- Respects `prefers-reduced-motion`
- Maintains normal cursor for inputs/buttons
- ARIA hidden on decorative elements

### Performance Tips
- Particles use CSS animations (GPU accelerated)
- `pointer-events: none` prevents interference
- Throttled event handling
- Automatic cleanup prevents memory leaks

## 🐛 Troubleshooting

### Cursor not appearing?
1. Check if `public/broom.png` exists
2. Verify you're on a desktop device (not touch)
3. Check browser console for errors

### Real cursor still showing?
1. Hard refresh the page (Cmd+Shift+R / Ctrl+Shift+R)
2. Check browser DevTools for cursor CSS overrides
3. Ensure `pointer: fine` media query is working

### Laggy performance?
1. Reduce `maxParticles` in `BroomCursor.tsx`
2. Increase `throttleDelay` (currently 16ms)
3. Reduce particle animation duration

### Broom not flipping/rotating correctly?
1. Check broom image orientation in `public/broom.png`
2. Adjust `transform-origin` in `broom-cursor.css` (currently 30% 50%)
3. Modify angle offset (+45) in component
4. Flip threshold is based on `dx < 0` (moving left)

## 🎨 Color Palette

Current mystical theme:
- **Accent Purple**: `#9B4CC2` (Bright Purple)
- **Golden Yellow**: `#E8C14B` (Highlight)
- **Mint Green**: `#46E2A1` (Glow)
- **Deep Purple**: `#3A1F3D` (Primary)
- **Shadow**: `#1B0F1F` (Very Dark Purple)

## 📝 Notes

- The cursor is globally active on desktop
- Normal cursor appears on buttons/inputs for usability
- Particle colors cycle through 3 variants automatically
- The broom image can be any PNG, SVG, or image format
- Z-index is 9999 to stay above all content

---

**Enjoy your magical cursor! 🧙‍♀️✨**

