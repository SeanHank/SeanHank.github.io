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
        { name: 'Java', level: 90, icon: 'api' },
        { name: 'C#', level: 90, icon: 'nodejs' },
        { name: 'SQLite', level: 88, icon: 'mongodb' },
        { name: 'MySQL', level: 88, icon: 'graphql' },
        { name: 'NoSQL', level: 80, icon: 'database' },
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: 'tool',
      items: [
        { name: 'Docker', level: 90, icon: 'docker' },
        { name: 'Github Actions', level: 85, icon: 'git' },
        { name: 'Git', level: 80, icon: 'aws' }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: 'Atom',
      description: 'Not just a game. ',
      category: 'desktop',
      image: 'https://github.com/user-attachments/assets/2e072827-1e53-44c0-9ca3-3ea21ef5e13a',
      technologies: ['Java', 'Gradle', 'LibGDX', 'lwjgl 3'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart with real-time updates',
        'Secure payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Order tracking and history'
      ],
      github: 'https://github.com/SeanHank/Atom',
      demo: null
    },
    {
      id: 2,
      title: 'World Simulation App',
      description: 'VIRTUALIZED Global Geopolitical and Economic Simulation Platform.',
      category: 'desktop',
      image: 'https://private-user-images.githubusercontent.com/261349759/597091136-ee8ec72c-b947-467a-951d-de704132f69d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk2OTkzMjgsIm5iZiI6MTc3OTY5OTAyOCwicGF0aCI6Ii8yNjEzNDk3NTkvNTk3MDkxMTM2LWVlOGVjNzJjLWI5NDctNDY3YS05NTFkLWRlNzA0MTMyZjY5ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyNVQwODUwMjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NDBkNGQ5NDUyMWVmMWZiMjE2NWE5ZDk5YjE4YTFkNTNmMGRmYTU5OTI2NzBhNzM3MjdkYTM5NTA3MDM2MmVmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.bSQUBHycMoC-NqOqyeseMs4k2eSVZFuvlLI7z4KIe7Y',
      technologies: ['C#'],
      features: [
        'Real-time simulation',
        'Sophisticated macroeconomic economic modeling',
        'Predict complex political dynamics',
        'Geographic-circumstance-based Military System',
        'Bilateral relationships maintained via Diplomatic System',
        'Terrain-affected War System',
        'AI Behavior System make auto decisions',
      ],
      github: 'https://github.com/SeanHank/WorldSimApp',
      demo: null
    },
    {
      id: 3,
      title: 'Cliff Messenger',
      description: 'Cross-platform, end-to-end encrypted, and privacy-focused instant messaging application',
      category: 'mobile',
      image: 'https://private-user-images.githubusercontent.com/261349759/597091382-0002ea4e-1d02-4f58-a9c8-ebe96725f176.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk3MDA3MzAsIm5iZiI6MTc3OTcwMDQzMCwicGF0aCI6Ii8yNjEzNDk3NTkvNTk3MDkxMzgyLTAwMDJlYTRlLTFkMDItNGY1OC1hOWM4LWViZTk2NzI1ZjE3Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyNVQwOTEzNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMzJhYTViYTlkOTUwYzBkZjdmYTVkNTZjYTA1YTk0YTg4YmU4OTZhMWFkMWYyZmIxNDQ1ZTUzMDVmODlhYjk3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.WQOzKSBydWNCnOummEh8HfJF5kk84PKnF4rn8x7wTaY0',
      technologies: ['Dart', 'Material UI', 'NoSQL', 'SQLite'],
      features: [
        'All messages are encrypted using AES with group-specific keys',
        'Run your own messaging server with zero configuration',
        'Server never sees plaintext',
        'Send and receive encrypted text messages in group chats',
        'Share images with automatic encryption and compression',
        'Messages queued and delivered upon reconnection'
      ],
      github: 'https://github.com/SeanHank/CliffMessenger',
      demo: null
    },
    // {
    //   id: 4,
    //   title: 'Desktop Markdown Editor',
    //   description: 'A minimalist yet powerful Markdown editor for developers with live preview, syntax highlighting, and export to multiple formats.',
    //   category: 'desktop',
    //   image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
    //   technologies: ['Tauri', 'Vue.js', 'Rust', 'SQLite'],
    //   features: [
    //     'Real-time live preview',
    //     'Syntax highlighting for 100+ languages',
    //     'Export to PDF, HTML, and DOCX',
    //     'Customizable themes',
    //     'Git integration',
    //     'Local file storage'
    //   ],
    //   github: 'https://github.com/SeanHank/markdown-editor',
    //   demo: 'https://demo-markdown.example.com'
    // },
    // {
    //   id: 5,
    //   title: 'System Monitor Dashboard',
    //   description: 'A lightweight desktop application for monitoring system resources with real-time charts, customizable alerts, and process management.',
    //   category: 'desktop',
    //   image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
    //   technologies: ['Electron', 'React', 'Node.js', 'Chart.js'],
    //   features: [
    //     'Real-time CPU and memory monitoring',
    //     'Disk usage visualization',
    //     'Network traffic tracking',
    //     'Process management and termination',
    //     'Customizable alert thresholds',
    //     'System tray integration'
    //   ],
    //   github: 'https://github.com/SeanHank/system-monitor',
    //   demo: null
    // },
    // {
    //   id: 6,
    //   title: 'DevOps Automation Tool',
    //   description: 'CLI tool for automating common DevOps tasks including deployment, monitoring, and infrastructure management.',
    //   category: 'other',
    //   image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600',
    //   technologies: ['Python', 'Docker', 'Kubernetes', 'AWS'],
    //   features: [
    //     'Automated deployment pipelines',
    //     'Infrastructure as Code',
    //     'Container orchestration',
    //     'Monitoring and alerting',
    //     'Log aggregation',
    //     'Backup automation'
    //   ],
    //   github: 'https://github.com/SeanHank/devops-tool',
    //   demo: null
    // }
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
      degree: 'Bachelor of Software Engineering',
      period: '2025 - 2029',
      description: 'Specialised in UI/UX Design and Game Dev',
      achievements: [
        'GPA: 3.6 / 4.2',
        '2026 Interdisciplinary Contest in Modeling (ICM) Meritorious Winner, Problem E',
        'Completed independent development and obtained software copyright issued by China Copyright Protection Center (CCPC). '
      ]
    },
    {
      id: 2,
      institution: 'University of Auckland',
      degree: 'Master of Information Technology',
      period: '2029 - 2031',
      description: 'Obtain the right mix of technological skills, critical thinking and business awareness to drive innovation',
      achievements: [
        '?: ? / ?',
        'Let\'s see what will be written here in the future. ',
        'Let\'s see what will be written here in the future. '
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
