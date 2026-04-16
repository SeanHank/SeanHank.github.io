export default {
  personal: {
    name: 'Sean Hank',
    title: 'Full Stack Developer',
    motto: 'When straightening up, I saw the blue sea and sails. ',
    avatar: null,
    bio: 'A passionate developer with 7+ years of experience in building applications and services. Specialized in Python, C#, Java, and Vue.js with a strong focus on creating elegant, user-friendly solutions.',
    location: 'Auckland, New Zealand',
    email: 'xiaohanaus@gmail.com',
    website: 'https://seanhank.github.io',
    resume: '/resume.pdf'
  },

  social: {
    github: 'https://github.com/SeanHank',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/Xiao3631Han',
    email: 'xiaohanaus@gmail.com'
  },

  skills: [
    {
      category: 'Frontend',
      icon: 'code',
      items: [
        { name: 'Vue.js', level: 95, icon: 'vue' },
        { name: 'React', level: 90, icon: 'react' },
        { name: 'TypeScript', level: 90, icon: 'typescript' },
        { name: 'JavaScript', level: 85, icon: 'javascript' },
        { name: 'HTML/CSS', level: 70, icon: 'html' },
        { name: 'Sass/SCSS', level: 60, icon: 'sass' }
      ]
    },
    {
      category: 'Backend',
      icon: 'server',
      items: [
        { name: 'Python', level: 99, icon: 'python' },
        { name: 'NoSQL', level: 80, icon: 'database' },
        { name: 'SQLite', level: 85, icon: 'mongodb' },
        { name: 'MySQL', level: 88, icon: 'graphql' },
        { name: 'REST APIs', level: 80, icon: 'api' },
        { name: 'Node.js', level: 75, icon: 'nodejs' }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: 'tool',
      items: [
        { name: 'Git', level: 92, icon: 'git' },
        { name: 'Docker', level: 90, icon: 'docker' },
        { name: 'AWS', level: 80, icon: 'aws' },
        { name: 'CI/CD', level: 78, icon: 'ci' },
        { name: 'Linux', level: 90, icon: 'linux' },
        { name: 'Nginx', level: 85, icon: 'nginx' }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart with real-time updates',
        'Secure payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Order tracking and history'
      ],
      github: 'https://github.com/SeanHank/ecommerce-platform',
      demo: 'https://demo-ecommerce.example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, kanban boards, and team collaboration features.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      features: [
        'Real-time collaboration',
        'Drag and drop kanban boards',
        'Task assignment and comments',
        'Due date reminders',
        'Team workspaces',
        'File attachments'
      ],
      github: 'https://github.com/SeanHank/task-manager',
      demo: 'https://demo-taskapp.example.com'
    },
    {
      id: 3,
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      features: [
        'Workout tracking and scheduling',
        'Nutrition logging',
        'Progress charts and analytics',
        'Social sharing features',
        'Wearable device integration',
        'Offline mode support'
      ],
      github: 'https://github.com/SeanHank/fitness-tracker',
      demo: 'https://demo-fitness.example.com'
    },
    {
      id: 4,
      title: 'Desktop Markdown Editor',
      description: 'A minimalist yet powerful Markdown editor for developers with live preview, syntax highlighting, and export to multiple formats.',
      category: 'desktop',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
      technologies: ['Tauri', 'Vue.js', 'Rust', 'SQLite'],
      features: [
        'Real-time live preview',
        'Syntax highlighting for 100+ languages',
        'Export to PDF, HTML, and DOCX',
        'Customizable themes',
        'Git integration',
        'Local file storage'
      ],
      github: 'https://github.com/SeanHank/markdown-editor',
      demo: 'https://demo-markdown.example.com'
    },
    {
      id: 5,
      title: 'System Monitor Dashboard',
      description: 'A lightweight desktop application for monitoring system resources with real-time charts, customizable alerts, and process management.',
      category: 'desktop',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
      technologies: ['Electron', 'React', 'Node.js', 'Chart.js'],
      features: [
        'Real-time CPU and memory monitoring',
        'Disk usage visualization',
        'Network traffic tracking',
        'Process management and termination',
        'Customizable alert thresholds',
        'System tray integration'
      ],
      github: 'https://github.com/SeanHank/system-monitor',
      demo: null
    },
    {
      id: 6,
      title: 'DevOps Automation Tool',
      description: 'CLI tool for automating common DevOps tasks including deployment, monitoring, and infrastructure management.',
      category: 'other',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600',
      technologies: ['Python', 'Docker', 'Kubernetes', 'AWS'],
      features: [
        'Automated deployment pipelines',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring and alerting',
        'Log aggregation',
        'Backup automation'
      ],
      github: 'https://github.com/SeanHank/devops-tool',
      demo: null
    }
  ],

  experience: [
    {
      id: 1,
      company: 'TechCorp Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications and microservices architecture.',
      responsibilities: [
        'Architect and develop scalable web applications using Vue.js and Node.js',
        'Lead a team of 5 developers and conduct code reviews',
        'Implement CI/CD pipelines reducing deployment time by 60%',
        'Design and optimize database schemas for improved performance',
        'Collaborate with product team to define feature requirements'
      ],
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client-facing web applications from scratch.',
      responsibilities: [
        'Developed React and Vue.js applications for various clients',
        'Created RESTful APIs and GraphQL endpoints',
        'Implemented authentication and authorization systems',
        'Optimized frontend performance achieving 90+ Lighthouse scores',
        'Mentored junior developers and conducted technical interviews'
      ],
      technologies: ['React', 'Vue.js', 'Python', 'MongoDB', 'Redis']
    },
    {
      id: 3,
      company: 'WebAgency Co.',
      position: 'Frontend Developer',
      period: '2018 - 2020',
      description: 'Created responsive and interactive user interfaces for client websites.',
      responsibilities: [
        'Built pixel-perfect responsive layouts using HTML, CSS, and JavaScript',
        'Developed reusable UI components and design systems',
        'Integrated third-party APIs and services',
        'Collaborated with designers to implement visual designs',
        'Ensured cross-browser compatibility and accessibility'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Sass', 'jQuery']
    },
    {
      id: 4,
      company: 'Digital Solutions Ltd.',
      position: 'Junior Web Developer',
      period: '2016 - 2018',
      description: 'Started career building WordPress websites and learning modern web technologies.',
      responsibilities: [
        'Developed WordPress themes and plugins',
        'Maintained and updated existing websites',
        'Learned modern JavaScript frameworks',
        'Participated in team meetings and agile ceremonies',
        'Fixed bugs and improved website performance'
      ],
      technologies: ['PHP', 'WordPress', 'HTML', 'CSS', 'JavaScript']
    }
  ],

  education: [
    {
      id: 1,
      institution: 'Beijing University Of Technology',
      degree: 'Master of Software Engineering',
      period: '2025 - 2029',
      description: 'Specialized in UI/UX Design and Game Dev',
      achievements: [
        'Thesis: "Scalable Microservices Architecture Patterns"',
        'Teaching Assistant for CS101',
        'Published 2 papers in IEEE conferences'
      ]
    },
    {
      id: 2,
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      period: '2010 - 2014',
      description: 'Dean\'s List recipient, focused on Software Engineering',
      achievements: [
        'GPA: 3.8/4.0',
        'Member of ACM Student Chapter',
        'Led university coding competition team'
      ]
    }
  ],

  contact: {
    email: 'xiaohanaus@gmail.com',
    subject: 'Job Opportunity',
    message: 'I would love to discuss potential opportunities with you.',
    responseTime: 'Usually responds within 24 hours'
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Sean Hank. All rights reserved.`,
    disclaimer: 'Built with Vue.js and deployed with Github Pages'
  }
}
