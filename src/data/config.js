export default {
  personal: {
    name: 'Sean Hank',
    title: 'System Generalist',
    motto: 'When straightening up, I saw the blue sea and sails. ',
    avatar: 'https://avatars.githubusercontent.com/u/261349759?v=4',
    bio: 'A system generalist working across programming languages, AI, simulation, and game development. Currently focused on DrugOS, a multiscale human drug-response simulator.',
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
        { name: 'Vue.js', level: 92, icon: 'vue' },
        { name: 'TypeScript', level: 88, icon: 'typescript' },
        { name: 'JavaScript', level: 85, icon: 'javascript' },
        { name: 'Dart', level: 78, icon: 'dart' },
        { name: 'Flutter', level: 80, icon: 'flutter' },
        { name: 'Sass/SCSS', level: 75, icon: 'sass' }
      ]
    },
    {
      category: 'Backend',
      icon: 'server',
      items: [
        { name: 'Python', level: 95, icon: 'python' },
        { name: 'C# / .NET', level: 90, icon: 'dotnet' },
        { name: 'Java', level: 85, icon: 'java' },
        { name: 'Django', level: 85, icon: 'django' },
        { name: 'FastAPI', level: 82, icon: 'fastapi' },
        { name: 'Node.js', level: 80, icon: 'nodejs' }
      ]
    },
    {
      category: 'AI & Data',
      icon: 'code',
      items: [
        { name: 'PyTorch', level: 90, icon: 'pytorch' },
        { name: 'TensorFlow', level: 85, icon: 'tensorflow' },
        { name: 'NumPy', level: 88, icon: 'numpy' },
        { name: 'Pandas', level: 85, icon: 'pandas' },
        { name: 'OpenCV', level: 80, icon: 'opencv' },
        { name: 'Scikit-learn', level: 82, icon: 'scikit' }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: 'tool',
      items: [
        { name: 'Git', level: 92, icon: 'git' },
        { name: 'Docker', level: 88, icon: 'docker' },
        { name: 'Linux', level: 90, icon: 'linux' },
        { name: 'Bash', level: 85, icon: 'bash' },
        { name: 'SQLite', level: 85, icon: 'sqlite' },
        { name: 'Azure', level: 78, icon: 'azure' }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: 'HelixLang',
      description: 'DNA is source code.',
      category: 'other',
      image: '',
      technologies: ['Python', 'Compiler', 'Bioinformatics'],
      features: [
        'Bioinformatics-inspired programming language',
        'Treats DNA as the source of code',
        'Compiler toolchain written in Python',
        'Designed for biology and bioinformatics workflows'
      ],
      github: 'https://github.com/SeanHank/HelixLang',
      demo: null
    },
    {
      id: 2,
      title: 'DrugOS',
      description: 'Multiscale human drug-response simulator.',
      category: 'other',
      image: '',
      technologies: ['Python', 'Simulation', 'ML/AI'],
      features: [
        'Multiscale simulation of human drug response',
        'Python-based scientific computing stack',
        'Models the interaction between drugs and human biology'
      ],
      github: 'https://github.com/SeanHank/DrugOS',
      demo: null
    },
    {
      id: 3,
      title: 'HummingFlight',
      description: 'Run the full, unquantized GLM-5.2 BF16 on a single laptop.',
      category: 'other',
      image: '',
      technologies: ['C++', 'GLM', 'LLM'],
      features: [
        'High-performance C++ inference engine',
        'Runs full, unquantized GLM-5.2 at BF16 precision',
        'Engineered to fit and run on a single laptop'
      ],
      github: 'https://github.com/SeanHank/HummingFlight',
      demo: null
    },
    {
      id: 4,
      title: 'AtomZero',
      description: 'Zero is the cradle of all possibilities.',
      category: 'other',
      image: '',
      technologies: ['GDScript', 'Godot', 'Game Framework'],
      features: [
        'Game framework built in GDScript for Godot',
        'Mod and module support',
        'Designed as a foundation for voxel-style games'
      ],
      github: 'https://github.com/SeanHank/AtomZero',
      demo: null
    },
    {
      id: 5,
      title: 'Atom',
      description: 'Not just a game.',
      category: 'desktop',
      image: '',
      technologies: ['Java', 'Gradle', 'LibGDX', 'LWJGL 3'],
      features: [
        'Voxel-based game built with LibGDX and LWJGL 3',
        'Customizable gameplay systems',
        'Java and Gradle build pipeline'
      ],
      github: 'https://github.com/SeanHank/Atom',
      demo: null
    },
    {
      id: 6,
      title: 'PFLE',
      description: 'A language engine that learns English WITHOUT learning parameters.',
      category: 'other',
      image: '',
      technologies: ['Python', 'NLP', 'Language'],
      features: [
        'Language engine with zero learned parameters',
        'Learns English through structural rules',
        'Python-based research project'
      ],
      github: 'https://github.com/SeanHank/PFLE',
      demo: null
    },
    {
      id: 7,
      title: 'CliffMessenger',
      description: 'An E2EE secure messenger.',
      category: 'mobile',
      image: '',
      technologies: ['Dart', 'Material UI', 'SQLite', 'WebSocket'],
      features: [
        'End-to-end encrypted messaging',
        'Cross-platform Dart client with Material UI',
        'Self-hosted server with WebSocket transport',
        'SQLite-backed local storage'
      ],
      github: 'https://github.com/SeanHank/CliffMessenger',
      demo: null
    },
    {
      id: 8,
      title: 'WorldSimApp',
      description: 'VIRTUAL World Simulator.',
      category: 'desktop',
      image: '',
      technologies: ['C#', 'Avalonia', 'Simulation'],
      features: [
        'Desktop virtual world simulator',
        'Built with C# and Avalonia UI',
        'Simulation and modeling tool'
      ],
      github: 'https://github.com/SeanHank/WorldSimApp',
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
