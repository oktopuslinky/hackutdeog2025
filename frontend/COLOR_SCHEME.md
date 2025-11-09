# 🎨 Mystical Color Scheme

Your app now uses a cohesive mystical color palette throughout!

## 🌈 Color Palette

```css
--color-primary: #3A1F3D    /* Deep Purple (dark base) */
--color-secondary: #5C2E7E  /* Medium Purple (mid-tones) */
--color-accent: #9B4CC2     /* Bright Purple (main accent) */
--color-highlight: #E8C14B  /* Golden Yellow (highlights) */
--color-glow: #46E2A1       /* Mint Green (accents & glow) */
--color-shadow: #1B0F1F     /* Very Dark Purple (backgrounds) */
```

## 📍 Where Colors Are Applied

### **Global (index.css)**
- ✅ CSS variables defined in `:root`
- ✅ Body background: `#1B0F1F` (shadow)
- ✅ Glass buttons: Purple accent with golden highlights
- ✅ Button hover glow: Purple + mint green gradient

### **Landing Page (App.tsx)**
- ✅ Background: `#1B0F1F` (shadow)
- ✅ Liquid Ether colors: `#3A1F3D`, `#9B4CC2`, `#5C2E7E`
- ✅ Title gradient: Golden → Purple → Mint Green
- ✅ Title drop-shadow: Purple glow

### **Broom Cursor (broom-cursor.css)**
- ✅ Broom drop-shadow: Purple + mint green
- ✅ Main particles: Golden → Purple gradient
- ✅ Alt particles (3n): Mint green
- ✅ Alt particles (5n): Golden yellow

### **Mystic Dashboard (MysticDashboard.tsx)**

#### **Layout**
- ✅ Background gradient: Shadow → Primary → Shadow
- ✅ Header: Dark shadow background with purple border
- ✅ Shimmer line: Golden yellow

#### **Icons & Accents**
- ✅ Main sparkle icon: Mint green (`#46E2A1`)
- ✅ Rotating trend icon: Mint green
- ✅ Floating runes: Mint green, purple, golden

#### **Energy Forecast Graph**
- ✅ Card background: Secondary/Primary gradient
- ✅ Card border: Bright purple accent
- ✅ Description text: Golden
- ✅ Y-axis labels: Purple
- ✅ Graph background: Shadow
- ✅ Bar gradient: Mint green → Purple → Golden
- ✅ Sparkles on bars: Golden
- ✅ Day labels: Golden
- ✅ Legend: Mint/Golden for active, Purple for dormant

#### **Dashboard Cards**

**Fraud Tickets:**
- ✅ Background: Secondary purple gradient
- ✅ Border: Purple accent
- ✅ Floating rune: Purple

**Missing Potions:**
- ✅ Background: Mint green tint
- ✅ Border: Mint green
- ✅ Floating rune: Mint green

**Overflow Alerts:**
- ✅ Background: Golden tint
- ✅ Border: Golden
- ✅ Floating rune: Golden

### **Components**

**ShimmerText:**
- ✅ Gradient: Golden → Mint → Purple

**NotificationBubble:**
- ✅ Background glow: Purple → Mint gradient
- ✅ Background: Dark shadow
- ✅ Border: Purple, hover → Golden
- ✅ Pulse dot: Mint green

## 🎯 Color Usage Guide

### **When to Use Each Color:**

**Primary (#3A1F3D) - Deep Purple**
- Main backgrounds
- Base layers
- Gradient middle tones

**Secondary (#5C2E7E) - Medium Purple**
- Card backgrounds
- Section dividers
- Secondary elements

**Accent (#9B4CC2) - Bright Purple**
- Borders
- Main interactive elements
- Primary emphasis
- Glass button effects

**Highlight (#E8C14B) - Golden Yellow**
- Important text
- Sparkles & stars
- Hover states
- Call-to-action highlights
- Energy indicators

**Glow (#46E2A1) - Mint Green**
- Success indicators
- Active states
- Magical effects
- Particle trails
- Icons

**Shadow (#1B0F1F) - Very Dark**
- Page backgrounds
- Deep shadows
- Overlay backgrounds
- Modal underlays

## 🎨 Design Principles

### **Contrast Hierarchy:**
1. **Golden (#E8C14B)** - Highest emphasis, warmth
2. **Mint Green (#46E2A1)** - Medium emphasis, freshness
3. **Bright Purple (#9B4CC2)** - Primary actions
4. **Medium Purple (#5C2E7E)** - Secondary elements
5. **Deep Purple (#3A1F3D)** - Tertiary elements
6. **Shadow (#1B0F1F)** - Base layer

### **Color Combinations:**
- ✨ **Mystical Magic**: Purple + Golden + Mint
- 🌟 **Energy**: Golden + Mint Green
- 💜 **Depth**: Dark Purple + Medium Purple + Bright Purple
- 🔮 **Glow**: Any color + Mint Green accent

### **Accessibility:**
- All text colors have sufficient contrast against backgrounds
- Golden (#E8C14B) used for important text (high visibility)
- Mint green (#46E2A1) for indicators and success states
- Purple tones for non-critical elements

## 🔧 Customization

To adjust colors globally, edit `/src/index.css`:

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

Then use CSS variables in your components:
```css
background-color: var(--color-accent);
border-color: var(--color-highlight);
color: var(--color-glow);
```

---

**Your mystical color scheme is complete! 🪄✨**

