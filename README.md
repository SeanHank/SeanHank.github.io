# Modern Personal Portfolio Website

A modern, responsive personal portfolio website built with Vue 3, featuring particle effects, typing animations, and a sleek dark theme design.

## Features

✅ **Responsive Design** - Mobile-first approach, works on all devices  
✅ **Modern UI** - Beautiful gradient colors and smooth animations  
✅ **Interactive Animations** - AOS animations and custom effects  
✅ **Particle Effects** - Dynamic background particles  
✅ **Typing Effect** - Animated motto text  
✅ **Multiple Skill Displays** - Progress bars, circular charts, and skill cards  
✅ **Project Showcase** - Filtering and modal details  
✅ **Timeline** - Work experience and education history  
✅ **Contact Form** - Functional contact section  
✅ **Dark Theme** - Modern purple gradient design

## Tech Stack

- **Vue 3** - Progressive JavaScript Framework
- **Vue CLI** - Standard Tooling
- **AOS** - Animate On Scroll Library
- **particles.js** - Particle Background Effects
- **Sass** - CSS Pre-processor

## Project Structure

```
src/
├── components/
│   ├── layout/           # Navigation and UI layout
│   │   ├── NavBar.vue
│   │   └── BackToTop.vue
│   ├── sections/         # Main page sections
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── EducationSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterSection.vue
│   └── ui/              # Reusable UI components
│       ├── TypingEffect.vue
│       ├── ParticleBackground.vue
│       ├── ProgressBar.vue
│       ├── CircleChart.vue
│       ├── SkillCard.vue
│       ├── ProjectCard.vue
│       ├── ProjectModal.vue
│       └── Timeline.vue
├── data/
│   └── config.js         # All personal data configuration
├── style/
│   ├── _variables.scss   # SCSS variables
│   ├── _mixins.scss      # SCSS mixins
│   ├── _animations.scss  # Custom animations
│   └── main.scss        # Global styles
├── App.vue              # Root component
└── main.js              # Entry point
```

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run serve
```

4. Build for production
```bash
npm run build
```

## Configuration

All personal information is centralized in `src/data/config.js`. Update this file with your own information:

### Personal Information
```javascript
personal: {
  name: 'Your Name',
  title: 'Your Title',
  motto: 'Your Motto',
  avatar: null, // or path to your image
  bio: 'Your bio...',
  location: 'Your Location',
  email: 'your.email@example.com',
  resume: '/resume.pdf' // path to your resume
}
```

### Social Links
```javascript
social: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'your.email@example.com'
}
```

### Skills
```javascript
skills: [
  {
    category: 'Frontend',
    icon: 'code',
    items: [
      { name: 'Vue.js', level: 95, icon: 'vue' },
      // add more skills...
    ]
  }
]
```

### Projects
```javascript
projects: [
  {
    id: 1,
    title: 'Project Title',
    description: 'Brief description',
    category: 'web', // web, mobile, other
    image: 'https://...',
    technologies: ['Vue.js', 'Node.js'],
    features: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/...',
    demo: 'https://demo.com'
  }
]
```

### Experience
```javascript
experience: [
  {
    id: 1,
    company: 'Company Name',
    position: 'Job Title',
    period: '2020 - Present',
    description: 'Brief description',
    responsibilities: ['Task 1', 'Task 2'],
    technologies: ['Vue.js', 'Node.js']
  }
]
```

## Customization

### Colors
Update colors in `src/style/_variables.scss`:
```scss
$primary-color: #8B5CF6;    // Main purple
$secondary-color: #6366F1;  // Indigo
$accent-color: #EC4899;      // Pink accent
```

### Animations
- AOS animations are configured in `App.vue`
- Custom animations are defined in `src/style/_animations.scss`
- Typing speed can be adjusted in each component

### Responsive Breakpoints
```scss
// Mobile: < 768px
// Tablet: 768px - 1199px
// Desktop: >= 1200px
```

## Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to GitHub Pages
```bash
npm install -g vue-cli-service
vue-cli-service build --mode production
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Built with ❤️ using Vue 3

---

**Note**: Don't forget to update the `public/index.html` with your SEO meta tags and the `resume.pdf` in the public folder!
