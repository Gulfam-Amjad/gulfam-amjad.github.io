# 🚀 Quick Start Guide

## View Your Portfolio Right Now! 🌐

Your portfolio is **already running**! Just open:
```
http://localhost:5173
```

## Essential Commands 💻

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure at a Glance 📁

```
src/app/components/
  ├── Header.tsx          👈 Navigation (now with mobile menu!)
  ├── HeroSection.tsx     👈 Your name & intro
  ├── AboutSection.tsx    👈 About you
  ├── SkillsSection.tsx   👈 Your skills
  ├── ProjectsSection.tsx 👈 Your projects (UPDATE THIS!)
  ├── LearningJourneySection.tsx
  ├── ContactSection.tsx  👈 Contact info (UPDATE THIS!)
  └── StarfieldBackground.tsx
```

## Customize Your Portfolio 🎨

### 1. Update Your Information
Edit these files:
- [HeroSection.tsx](src/app/components/HeroSection.tsx) - Your name, title, intro
- [AboutSection.tsx](src/app/components/AboutSection.tsx) - About you
- [ContactSection.tsx](src/app/components/ContactSection.tsx) - Email, social links

### 2. Add Your Projects
Edit [ProjectsSection.tsx](src/app/components/ProjectsSection.tsx)

### 3. Update Skills
Edit [SkillsSection.tsx](src/app/components/SkillsSection.tsx)

### 4. Change Colors
Colors are defined with Tailwind classes like:
- `cyan-400`, `blue-500`, `purple-500` for accent colors
- `text-gray-300` for text
- Change throughout components or customize in theme.css

## Keyboard Shortcuts ⌨️

- **Tab**: Navigate through elements
- **Enter/Space**: Activate buttons
- **Escape**: Close mobile menu (if open)

## Mobile Testing 📱

1. Press **F12** to open DevTools
2. Click the **device toggle** icon (or Ctrl+Shift+M)
3. Select a mobile device from the dropdown
4. Test the mobile menu!

## Common Issues & Fixes 🔧

**Server won't start?**
```bash
# Kill any process using port 5173
npx kill-port 5173
npm run dev
```

**Changes not showing?**
- Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
- Or clear cache in DevTools

**Type errors?**
```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

## Deploy Your Portfolio 🌍

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy! (automatic builds on push)

### Option 2: Netlify
1. Build: `npm run build`
2. Drag & drop `dist/` folder to netlify.com
3. Done!

### Option 3: GitHub Pages
```bash
npm run build
# Then follow GitHub Pages setup for the dist folder
```

## Tips & Tricks 💡

1. **Hot Reload**: Save any file and see instant changes!
2. **Component Pattern**: Each section is a separate component for easy editing
3. **Tailwind**: Use Tailwind classes for styling (no need to write CSS)
4. **Icons**: Import from `lucide-react` for any icon you need
5. **Animations**: Use Framer Motion for smooth animations

## Need Help? 🆘

1. Check [README.md](README.md) for detailed docs
2. Check [IMPROVEMENTS.md](IMPROVEMENTS.md) for what was changed
3. Check browser console (F12) for any errors
4. TypeScript will show errors as you type in VS Code

---

**You're all set! 🎉**

Open http://localhost:5173 and start customizing your awesome portfolio!
