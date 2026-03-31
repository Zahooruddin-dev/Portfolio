
# 👨‍💻 Zahooruddin's React Portfolio

A modern, responsive, and interactive portfolio website built with React & Bootstrap. This project showcases my professional work, skills, and projects with smooth animations, particle effects, and a clean user interface.

![Version](https://img.shields.io/badge/version-3.7.6-blue)
![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react)
![Status](https://img.shields.io/badge/status-Active-brightgreen)

## 🌐 Live Demo

Visit my portfolio: [https://zahooruddin-dev.vercel.app](https://zahooruddin-dev.vercel.app)

## ✨ Features

- **🎨 Interactive UI** - Smooth animations, particle effects, and engaging interactions
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎯 Multi-Page Navigation** - Seamless routing with React Router
- **📊 Project Showcase** - Detailed project cards with descriptions, links, and demos
- **📄 Resume Section** - Easy-to-view and downloadable resume
- **🌙 Modern Design** - Clean, professional, and eye-catching aesthetics
- **⚡ High Performance** - Optimized build with excellent Lighthouse scores
- **🔗 Social Integration** - GitHub contributions and social media links
- **📧 Contact Information** - Easy ways to get in touch

## 🛠️ Tech Stack

### Frontend
- **React 17.0.2** - UI library
- **React Router DOM 6.2.2** - Client-side routing
- **React Bootstrap 2.2.1** - Component framework
- **Bootstrap 5.1.3** - CSS framework

### Animations & Effects
- **React Tsparticles 1.42.2** - Particle effects
- **React Parallax Tilt 1.7.42** - 3D tilt effects
- **Typewriter Effect 2.18.2** - Typing animations

### Additional Libraries
- **React PDF 5.7.1** - PDF rendering and display
- **React GitHub Calendar 3.2.2** - GitHub contributions calendar
- **React Icons 4.8.0** - Icon library
- **Axios 0.26.1** - HTTP client
- **React PDF Renderer 2.2.0** - PDF generation

### Development & Build
- **React Scripts 5.0.0** - Build scripts
- **Vercel** - Deployment platform

## 📁 Project Structure

```
React-Portfolio/
├── src/
│   ├── components/
│   │   ├── Home/
│   │   │   ├── Home.js          # Landing section
│   │   │   ├── Home2.js         # Additional home content
│   │   │   └── Type.js          # Typewriter effect
│   │   ├── About/
│   │   │   ├── About.js         # About section
│   │   │   ├── AboutCard.js     # About cards component
│   │   │   ├── Github.js        # GitHub integration
│   │   │   ├── Techstack.js     # Technology stack
│   │   │   └── Toolstack.js     # Tools and tools
│   │   ├── Projects/
│   │   │   ├── Projects.js      # Projects showcase
│   │   │   └── ProjectCards.js  # Individual project card
│   │   ├── Resume/
│   │   │   └── ResumeNew.js     # Resume display
│   │   ├── Navbar.js            # Navigation bar
│   │   ├── Footer.js            # Footer component
│   │   ├── Particle.js          # Particle effects
│   │   ├── Pre.js               # Preloader
│   │   └── ScrollToTop.js       # Scroll to top button
│   ├── Assets/
│   │   └── Projects/            # Project images
│   ├── App.js                   # Main app component
│   ├── App.css                  # App styles
│   ├── index.js                 # Entry point
│   ├── index.css                # Global styles
│   └── style.css                # Additional styles
├── public/
│   ├── index.html               # HTML template
│   ├── manifest.json            # PWA manifest
│   └── robots.txt               # SEO robots file
├── package.json                 # Dependencies
├── vercel.json                  # Vercel configuration
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zahooruddin-dev/React-Portfolio.git
   cd React-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `build/` directory

## 📖 Usage

### Navigation Structure

The portfolio includes the following sections:

- **Home** - Landing page with introduction and call-to-action
- **About** - Personal information, tech stack, tools, and GitHub contributions
- **Projects** - Showcase of recent projects with links and descriptions
- **Resume** - Professional resume with downloadable PDF option

### Customization

To customize the portfolio for your own use:

1. Update personal information in relevant component files
2. Replace project data in `src/components/Projects/Projects.js`
3. Modify colors and styles in CSS files
4. Update social media links in `src/components/Footer.js`
5. Add your own images to `src/Assets/`

## 🎯 Featured Projects

This portfolio showcases various projects including:

- **Mizuka Types** - A React-based typing application for speed and accuracy training
- **Mizuka** - B2B SaaS solution for creating and managing interactive quizzes
- Various other web development projects

*See the Projects page for complete descriptions and live demos.*

## 🌍 Deployment

This project is deployed on **Vercel** and automatically deploys from the main branch.

### Deploy Your Own

1. Push code to GitHub
2. Connect repository to Vercel
3. Set build command: `npm run build`
4. Set output directory: `build`
5. Deploy!

The `vercel.json` file is configured to handle client-side routing with SPA rewrites.

## 📊 Performance

- ⚡ Optimized build with code splitting
- 📦 Lean bundle size
- 🎨 Efficient rendering with React 17
- 🖼️ Lazy-loaded components
- 📱 Mobile-first responsive design

*Built for speed - the site performs great with excellent Lighthouse scores!*

## 🆕 Recent Updates (April 2026)

- Added a dedicated Experience page with responsive timeline-style layout.
- Improved Projects section structure with better card consistency and updated featured project focus.
- Refined About section content and social links for clearer professional positioning.
- Upgraded navbar branding from image logo to styled text branding.
- Improved app routing performance with route-level lazy loading for non-home pages.
- Fixed footer flicker during route transitions by stabilizing app layout during lazy-route loading.
- Updated footer and social presentation for cleaner responsiveness across desktop and mobile.

## 🔗 Connect With Me

I'd love to connect with you! Feel free to reach out:

- **GitHub:** [@zahooruddin-dev](https://github.com/zahooruddin-dev)
- **LinkedIn:** [Zahooruddin Nizamani](https://www.linkedin.com/in/zahooruddinmizuka/)
- **Email:** 
  - Personal: mzkhan886@gmail.com
  - Business: founder@mizuka.app

## 📜 License

This project is free to use. Feel free to fork, modify, and use it as a template for your own portfolio.

## 🙏 Acknowledgments

- React community and documentation
- Bootstrap team for amazing UI framework
- Vercel for seamless deployment
- All contributors and supporters

## 📝 Notes

- Some features are still in development and will be added as performance benchmarks are met
- The production build is consistently optimized and performs excellently
- Last updated: February 2026 - Site is working great with an optimized build deployed on Vercel

---

<div align="center">
  
**Made with ❤️ by Zahooruddin**

*Always open to collaboration and new opportunities!*

</div> 
