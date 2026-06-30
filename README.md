# NayePankh Foundation Website

A modern, responsive, and premium-quality landing website for NayePankh Foundation — a non-profit organization dedicated to uplifting underprivileged communities across India.

## Features

- **Modern React + Vite + Tailwind CSS** stack
- **Fully Responsive** design for all devices
- **Dark Mode** with local storage persistence
- **Smooth Animations** using Intersection Observer and CSS transitions
- **Animated Counter Stats** that trigger on scroll
- **Interactive Gallery** with lightbox
- **Testimonial Slider** with auto-play
- **FAQ Accordion** with smooth transitions
- **Sticky Navigation** with scroll-aware active states
- **Scroll Progress Indicator**
- **Back to Top Button**
- **Mouse-follow Glow Effect** on hero
- **Particle Network Canvas** background
- **Floating Cards** with animations
- **Glassmorphism** UI elements
- **Gradient Text** and modern typography
- **Accessibility** best practices (ARIA labels, semantic HTML, focus states)
- **SEO Optimized** with meta tags, Open Graph, and canonical URL

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── MissionVision.jsx
│   ├── CoreValues.jsx
│   ├── Programs.jsx
│   ├── ImpactStats.jsx
│   ├── Testimonials.jsx
│   ├── Gallery.jsx
│   ├── Volunteer.jsx
│   ├── Donation.jsx
│   ├── FAQ.jsx
│   ├── Partners.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ScrollProgress.jsx
│   ├── BackToTop.jsx
│   └── DarkModeToggle.jsx
├── hooks/
│   ├── useDarkMode.js
│   ├── useScrollAnimation.js
│   └── useCountUp.js
├── App.jsx
├── main.jsx
└── index.css
```

## Design Highlights

- **Color Palette**: Deep Blue (Primary), Orange (Secondary), Green (Accent)
- **Typography**: Inter + Poppins from Google Fonts
- **Animations**: Fade-in, slide-up, float, blob, and hover effects
- **Glassmorphism**: Backdrop blur with semi-transparent backgrounds
- **Gradient Accents**: Used on headings, buttons, and backgrounds

## Performance

- Lazy loading images
- Optimized animations using `requestAnimationFrame`
- Minimal JavaScript footprint
- No unnecessary libraries

## License

&copy; 2024 NayePankh Foundation. All rights reserved.
