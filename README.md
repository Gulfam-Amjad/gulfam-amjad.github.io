
# 🚀 Gulfam Amjad - ML Portfolio

A stunning, futuristic portfolio website showcasing Machine Learning projects, skills, and journey. Built with modern web technologies and optimized for performance and accessibility.

## ✨ Features

- **Futuristic Design**: Dark theme with cyan/blue/purple gradient accents
- **Animated Starfield Background**: Dynamic particle system for visual appeal
- **Responsive Design**: Mobile-first approach with responsive navigation
- **Smooth Animations**: Framer Motion for fluid transitions and interactions
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Error Handling**: Error boundaries for graceful error recovery
- **Loading States**: Beautiful loading screen for better UX
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.3.5 (Lightning fast HMR)
- **Styling**: Tailwind CSS 4.1 + Custom CSS
- **Animations**: Framer Motion (motion)
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Development**: TypeScript with strict mode

## 📦 Installation

1. **Clone the repository** (or you already have it)

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Running the Project

### Development Mode
Start the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

### Production Build
Build for production:

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 📁 Project Structure

```
design/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Main app component
│   │   └── components/
│   │       ├── Header.tsx             # Navigation with mobile menu
│   │       ├── HeroSection.tsx        # Landing section
│   │       ├── AboutSection.tsx       # About me section
│   │       ├── SkillsSection.tsx      # Skills showcase
│   │       ├── ProjectsSection.tsx    # Projects gallery
│   │       ├── LearningJourneySection.tsx
│   │       ├── ContactSection.tsx     # Contact information
│   │       ├── StarfieldBackground.tsx # Animated background
│   │       ├── ErrorBoundary.tsx      # Error handling
│   │       └── LoadingScreen.tsx      # Loading state
│   ├── styles/
│   │   ├── index.css                  # Main styles
│   │   ├── fonts.css                  # Font imports
│   │   ├── tailwind.css               # Tailwind config
│   │   └── theme.css                  # Theme variables
│   └── main.tsx                       # Entry point
├── index.html                         # HTML template
├── vite.config.ts                     # Vite configuration
├── tsconfig.json                      # TypeScript config
└── package.json                       # Dependencies

## 🎨 Improvements Made

### 1. **TypeScript Configuration**
   - Added `tsconfig.json` with strict type checking
   - Configured path aliases for cleaner imports
   - Added `tsconfig.node.json` for build tools

### 2. **Enhanced HTML**
   - SEO meta tags (description, keywords, author)
   - Open Graph tags for social media sharing
   - Twitter card tags
   - Theme color for mobile browsers
   - Custom favicon

### 3. **Responsive Navigation**
   - Mobile hamburger menu with smooth animations
   - Active section highlighting
   - Smooth scroll to sections
   - Keyboard accessible

### 4. **Error Handling & Loading**
   - Error boundary component with refresh option
   - Loading screen with animated spinner
   - Graceful error recovery

### 5. **Performance & Accessibility**
   - Focus-visible styles for keyboard navigation
   - Prefers-reduced-motion support
   - Optimized animations
   - Semantic HTML structure

### 6. **Dependencies Fixed**
   - Added React and React-DOM to dependencies
   - Added TypeScript types for React
   - All imports now resolve correctly

## 🌐 Viewing on Localhost

Once you run `npm run dev`, open your browser and navigate to:

```
http://localhost:5173
```

You should see your portfolio with:
- Animated starfield background
- Your name and title in the hero section
- Smooth navigation between sections
- Responsive design that works on mobile

## 🔧 Customization

To personalize the portfolio:

1. **Update personal information** in `HeroSection.tsx`
2. **Add your projects** in `ProjectsSection.tsx`
3. **Update skills** in `SkillsSection.tsx`
4. **Change colors** in `tailwind.css` or component styles
5. **Add your GitHub/LinkedIn** links in `HeroSection.tsx` and `ContactSection.tsx`

## 📱 Browser Support


## 🐛 Troubleshooting

**Port already in use?**
```bash
# Vite will automatically try the next available port
# Or specify a port:
npm run dev -- --port 3000
```

**Module not found errors?**
```bash
# Clear cache and reinstall:
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

Original design: https://www.figma.com/design/ispqhV9hDU2oiWx67DJzVL/Futuristic-ML-Portfolio-UI

---

**Built with ❤️ by Gulfam Amjad**

BSIT Student | Machine Learning Enthusiast | University of Education, Lahore
  