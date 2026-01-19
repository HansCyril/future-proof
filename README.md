# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js, Framer Motion, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and a clean component-based architecture.

## 🚀 Features

### ✨ User Experience
- **Smooth Animations**: Leveraging Framer Motion for elegant page transitions and scroll-based reveal animations
- **Dark/Light Mode**: Built-in theme toggle with localStorage persistence
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Accessibility**: Proper semantic HTML and WCAG color contrast standards
- **SEO-Friendly**: Optimized structure and metadata for better search engine visibility

### 🎨 Design
- **Modern Minimalist UI**: Clean, professional design with gradient accents
- **Hover Effects**: Interactive hover states and animations throughout
- **Smooth Scrolling**: Native smooth scroll behavior with custom scrollbar styling
- **Custom Scrollbar**: Themed scrollbar that adapts to light/dark mode
- **Professional Typography**: Carefully selected fonts and font sizes for readability

### 🏗️ Architecture
- **Component-Based**: Reusable, well-organized components
- **React Hooks**: Modern React patterns with TypeScript
- **Context API**: Theme management using React Context
- **Performance Optimized**: Code splitting and lazy rendering where applicable
- **Type-Safe**: Full TypeScript support for better development experience

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with theme toggle
│   ├── Footer.tsx          # Footer with social links
│   ├── ContactForm.tsx     # Contact form with validation
│   ├── ProjectsGrid.tsx    # Projects showcase with modal
│   ├── SkillsGrid.tsx      # Skills with animated progress bars
│   └── Timeline.tsx        # Experience timeline
├── context/
│   └── ThemeContext.tsx    # Dark/light mode context
├── pages/
│   ├── HomePage.tsx        # Hero section with CTA
│   └── AboutPage.tsx       # About section with features
├── utils/
│   └── animations.ts       # Framer Motion animation variants
├── data/
│   └── content.ts          # Portfolio content (skills, projects, etc.)
├── App.tsx                 # Main app component
├── main.tsx                # React entry point
└── index.css               # Global styles with Tailwind CSS
```

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.2+**: Latest React with hooks and concurrent features
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformation
- **Autoprefixer**: Browser compatibility

### Animations & Interactions
- **Framer Motion**: Production-ready motion library
- **Custom CSS Animations**: For simple, performant animations

### Utilities
- **Lucide React**: Beautiful, consistent icon library

### Development Tools
- **ESLint**: Code quality and style checking
- **TypeScript ESLint**: TypeScript-specific linting

## 📋 Pages & Sections

### 1. **Home**
- Hero section with name, title, and intro
- Call-to-action buttons (View Projects, Contact Me)
- Animated elements and floating emoji illustration
- Social media links
- Smooth scroll indicator

### 2. **About**
- Brief biography
- Key features/strengths (Clean Code, Problem Solving, Quality Focused)
- Stats showcase (Projects, Clients, Years Experience)
- Technical skills with animated progress bars

### 3. **Projects**
- Project cards with hover effects
- Project categories
- Technology badges
- Live demo and source code links
- Click to view detailed project modal
- Animated image zoom on hover

### 4. **Experience**
- Timeline layout of career progression
- Role, company, and period information
- Job descriptions
- Skills associated with each role
- Animated timeline markers

### 5. **Contact**
- Contact form with validation
- Email, name, subject, message fields
- Loading and success/error states
- Form validation feedback
- Success message animation

### 6. **Header**
- Fixed navigation with smooth scroll links
- Dark/light mode toggle
- Responsive design with mobile considerations

### 7. **Footer**
- Quick links navigation
- Social media links
- Copyright information
- Gradient branding

## 🎬 Animation Features

The portfolio utilizes Framer Motion for various animation effects:

- **Page Transitions**: Smooth fade-in animations on page load
- **Scroll Reveal**: Elements animate in as they come into view
- **Hover Effects**: Cards scale and lift on hover
- **Stagger**: Multiple elements animate in sequence
- **Progress Bars**: Animated skill level indicators
- **Floating Elements**: Continuous subtle animations on hero section

All animations are performance-optimized and include `will-change` hints where necessary.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd "d:/future eder"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Customization Guide

### Change Portfolio Content

Edit `src/data/content.ts`:
- Update `skillsData` with your skills
- Update `projectsData` with your projects
- Update `experienceData` with your experience

### Customize Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
      accent: '#YOUR_COLOR',
    },
  },
}
```

### Modify Header Navigation

Edit `src/components/Header.tsx` navigation links and add your own pages.

### Update Personal Information

- **HomePage.tsx**: Update name, title, and intro
- **Footer.tsx**: Update social links and copyright

### Add/Remove Sections

Edit `src/App.tsx` to add or remove sections from the main page.

## 🎨 Dark Mode

The dark mode is automatically applied based on:
1. User's system preference (if not previously set)
2. Stored preference in localStorage
3. Manual toggle via the theme button

Theme class `dark` is automatically added to the document root.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: 1024px+ (lg)

All components are designed mobile-first and tested on various screen sizes.

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta descriptions
- Open Graph tags (can be added to index.html)
- Optimized page titles
- Heading hierarchy

## ⚡ Performance

- **Code Splitting**: Automatic via Vite
- **Lazy Loading**: Images and components loaded on-demand
- **Optimized Animations**: GPU-accelerated transforms
- **Production Build**: ~277KB JS, ~25KB CSS (gzipped sizes much smaller)

## 🛡️ Accessibility

- Semantic HTML elements
- WCAG 2.1 color contrast compliance
- Keyboard navigation support
- ARIA labels where needed
- Focus indicators on interactive elements

## 📚 Using Components

### ContactForm
```tsx
import ContactForm from './components/ContactForm'

<ContactForm />
```

### ProjectsGrid
```tsx
import ProjectsGrid from './components/ProjectsGrid'
import { projectsData } from './data/content'

<ProjectsGrid projects={projectsData} />
```

### Timeline
```tsx
import Timeline from './components/Timeline'
import { experienceData } from './data/content'

<Timeline experiences={experienceData} />
```

### SkillsGrid
```tsx
import SkillsGrid from './components/SkillsGrid'
import { skillsData } from './data/content'

<SkillsGrid skills={skillsData} />
```

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
# Connect your repo to Vercel for automatic deployments
```

### Deploy to GitHub Pages
Update `vite.config.ts` with your repository URL and run `npm run build`.

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Animations are laggy
- Check browser DevTools Performance tab
- Reduce animation complexity if on older devices
- Disable some animations in `utils/animations.ts`

### Dark mode not persisting
- Check if localStorage is enabled
- Clear browser cache and localStorage
- Check if theme is being set in ThemeContext.tsx

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork and modify this portfolio template for your own use!

## 📧 Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ using React, Framer Motion, and Tailwind CSS**
