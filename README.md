# NayePankh Foundation — NGO Website

A modern, responsive, and premium-quality landing website for **NayePankh Foundation**, a UP Government registered NGO (80G & 12A) dedicated to uplifting underprivileged communities across India through education, health, and compassionate support.

**Live Site:** [nayepankh19.netlify.app](nayepankh19.netlify.app)

---

## Features

- **13 Complete Sections:** Hero, About, Mission & Vision, Core Values, Programs, Impact Stats, Testimonials, Gallery, Volunteer, Donation, FAQ, Partners, Contact, and Footer
- **Fully Responsive:** Works seamlessly on desktop, tablet, and mobile
- **Dark Mode Toggle:** With localStorage persistence — your preference is saved
- **Smooth Scroll Animations:** Elements fade and slide in as you scroll
- **Animated Counter Stats:** Numbers animate when scrolled into view
- **Interactive Gallery:** Click any image to open a lightbox preview
- **Auto-Play Testimonial Slider:** With manual navigation controls
- **FAQ Accordion:** Smooth expand/collapse for common questions
- **Sticky Navigation:** Highlights active section while scrolling
- **Scroll Progress Indicator:** Top bar shows reading progress
- **Back to Top Button:** Appears after scrolling down
- **Mouse-Follow Glow Effect:** Subtle glow follows cursor on hero section
- **Particle Network Canvas:** Animated background dots and connections
- **Glassmorphism UI:** Frosted glass cards and nav elements
- **Gradient Text Headings:** Modern typography with color gradients
- **SEO Optimized:** Meta tags, Open Graph, canonical URL, semantic HTML
- **Accessibility:** ARIA labels, keyboard navigation, focus states, proper contrast

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev) | UI Library |
| [Vite](https://vitejs.dev) | Build Tool & Dev Server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-First CSS Framework |
| [Lucide React](https://lucide.dev) | Icon Library |
| [Framer Motion](https://www.framer.com/motion) | Animation Library (optional) |
| [AOS](https://michalsnik.github.io/aos) | Scroll Animation Library (optional) |

---

## How to Use This Website

### For Visitors

1. **Browse Sections:** Use the sticky navigation bar or scroll to explore all sections
2. **Toggle Dark Mode:** Click the sun/moon icon in the top-right corner
3. **View Programs:** Hover over program cards to see scale and shadow effects
4. **Open Gallery:** Click any gallery image to view it in a full-screen lightbox
5. **Read Testimonials:** Use arrow buttons or wait for auto-play to cycle through stories
6. **Expand FAQ:** Click any question to reveal the answer
7. **Contact Form:** Fill in your name, email, and message — then click "Send Message"
8. **Donate:** Select an amount to see your impact, then click "Donate Now"
9. **Volunteer:** Fill the volunteer sign-up form and click "Sign Up to Volunteer"

### For Developers

#### Local Setup

```bash
# Clone the repository
git clone https://github.com/Suryanshdev1/nayepankh-foundation.git
```

```bash
# Navigate to project folder
cd nayepankh-foundation
```

```bash
# Install dependencies
npm install
```

```bash
# Start development server
npm run dev
```

## Open localhost in your browser
Build for Production

```bash
# Create optimized production build
npm run build
```

## Output will be in the `dist/` folder
Deploy
This project is configured for Netlify deployment:
Push code to GitHub
Connect repo to Netlify
Build settings are auto-configured via netlify.toml
Every push to main branch triggers auto-deployment

## Project Structure

```
nayepankh-foundation/
│
├── public/
│   ├── favicon.svg
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── MissionVision.jsx
│   │   ├── CoreValues.jsx
│   │   ├── Programs.jsx
│   │   ├── ImpactStats.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── Volunteer.jsx
│   │   ├── Donation.jsx
│   │   ├── FAQ.jsx
│   │   ├── Partners.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── BackToTop.jsx
│   │   └── DarkModeToggle.jsx
│   │
│   ├── hooks/
│   │   ├── useDarkMode.js
│   │   ├── useScrollAnimation.js
│   │   └── useCountUp.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── vercel.json
└── README.md
```

## Design Highlights

- Color Palette: Deep Blue (Primary), Orange (Secondary), Green (Accent)
- Typography: Inter + Poppins (Google Fonts)
- Animations: Fade-in, slide-up, float, blob, hover lift, scale effects
- Glassmorphism: Backdrop blur with semi-transparent backgrounds
- Gradient Accents: Applied to headings, buttons, and decorative elements

## Performance Optimizations

- Lazy loading images with loading="lazy"
- Optimized scroll animations using IntersectionObserver
- Smooth counter animations using requestAnimationFrame
- Minimal JavaScript footprint
- No unnecessary external libraries

## Known Limitations

- Contact Form: Frontend-only display. To make it functional, connect to Formspree, EmailJS, or a backend API.
- Donation Button: Frontend-only UI. Integrate with Razorpay, Stripe, or similar payment gateway for real transactions.
- Gallery Images: Currently uses Unsplash placeholder URLs. Replace with actual NGO photos.

## Future Enhancements

```
[ ] Integrate real payment gateway for donations
[ ] Connect contact form to email service (Formspree/EmailJS)
[ ] Add a blog/news section
[ ] Implement user authentication for volunteers
[ ] Add a real-time chat support widget
[ ] Create an admin dashboard for content management
[ ] Add multi-language support (Hindi/English)
```

## Credits & Inspiration

- Reference Website: nayepankh.com — Studied for content and mission, completely redesigned UI/UX
- Icons: Lucide
- Images: Unsplash
- Fonts: Google Fonts — Inter & Poppins

## Author

```
Suryansh Dev
GitHub: @Suryanshdev1
```

```
Built with passion for a better India
"Service to mankind is the service to God." — NayePankh Foundation
```

## Support

```
If you found this project helpful, please consider:
⭐ Starring this repository
🍴 Forking it for your own NGO projects
📢 Sharing it with others
```

## License
&copy; 2024 NayePankh Foundation. All rights reserved.
