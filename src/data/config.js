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
      description: 'DNA is source code. Codons are mnemonics. The ribosome is a VM.',
      category: 'other',
      image: '',
      technologies: ['Python', 'Compiler', 'Bytecode VM', 'Bioinformatics'],
      features: [
        'A DSL where genetic material is the source and a bytecode VM is the runtime',
        'Full compiler pipeline (Lexer → Parser → AST → Compiler → Bytecode → VM)',
        '22 quantitative simulation backends: FBA metabolism, whole-cell physiology, ecology, human pharmacology',
        'Validated against COBRApy with error < 10⁻¹³, incl. a 2,712-reaction E. coli model',
        '7,594 test cases at 100% coverage; 85/85 benchmarks with SHA256-verified goldens'
      ],
      github: 'https://github.com/SeanHank/HelixLang',
      demo: null
    },
    {
      id: 2,
      title: 'HelixLang-LSP-Plugin',
      description: 'Language Server Protocol integration for the HelixLang.',
      category: 'other',
      image: '',
      technologies: ['Python', 'Kotlin', 'LSP', 'PyCharm'],
      features: [
        'PyCharm plugin + Python language server for the HelixLang DSL',
        'Live diagnostics, hover docs, completion, navigation and semantic highlighting',
        'Bytecode disassembler tool window and a DAP line debugger for the VM',
        'Server gated by ruff + mypy + pytest at 100% coverage; published on JetBrains Marketplace'
      ],
      github: 'https://github.com/SeanHank/HelixLang-LSP-Plugin',
      demo: null
    },
    {
      id: 3,
      title: 'DrugOS',
      description: 'Multiscale human drug-response simulator.',
      category: 'other',
      image: '',
      technologies: ['Python', 'Simulation', 'PBPK', 'RDKit'],
      features: [
        'From SMILES + dose + route + human profile to a graded, evidence-attributed toxicity verdict',
        'Whole-body PBPK across 83 compartments plus target occupancy, QSP signaling and organ-level DILI/QT/AKI/CNS models',
        'Anchored to production-validated open-source models: ADMET-AI, O\'Hara-Rudy 2011, CKD-EPI 2021, bile-acid PBK',
        'Decision layer with 90% uncertainty bands, virtual cohorts and Sobol sensitivity analysis',
        '53/53 validation cases green and 100% branch coverage enforced via CI'
      ],
      github: 'https://github.com/SeanHank/DrugOS',
      demo: null
    },
    {
      id: 4,
      title: 'HummingFlight',
      description: 'Run the full, unquantized GLM-5.2 BF16 on a single laptop.',
      category: 'other',
      image: '',
      technologies: ['C++', 'LLM', 'MoE', 'CUDA'],
      features: [
        'From-scratch C++ inference engine running unquantized GLM-5.2 at BF16 (bit-exact)',
        'Three-tier memory hierarchy (VRAM / RAM / HDD) that streams weights on demand',
        'MoE-aware loading: fetches only the 8 router-selected experts of 256 (32x less I/O)',
        'Layer-ahead prefetch with Windows IOCP async I/O and AVX2+FMA BF16 GEMV kernels',
        'DeepSeek-V3 style MLA attention with compressed KV cache and decoupled RoPE'
      ],
      github: 'https://github.com/SeanHank/HummingFlight',
      demo: null
    },
    {
      id: 5,
      title: 'AtomZero',
      description: 'Zero is the cradle of all possibilities.',
      category: 'other',
      image: '',
      technologies: ['GDScript', 'Godot', 'Mod Framework'],
      features: [
        'Godot 4.6 game framework with zero gameplay — everything is delivered through mods',
        'Global and world-scoped mods with dependency injection via an 8-sub-API ModAPI facade',
        'Event-driven EventBus, mod:// virtual filesystem, SHA256 TOFU verification and SemVer resolution',
        'Cross-platform (macOS / Windows / Linux / Android / iOS) with dev and release packaging modes'
      ],
      github: 'https://github.com/SeanHank/AtomZero',
      demo: null
    },
    {
      id: 6,
      title: 'Atom',
      description: 'Not just a game.',
      category: 'desktop',
      image: '',
      technologies: ['Java', 'LibGDX', 'Gradle', 'LWJGL 3'],
      features: [
        'Sandbox voxel game with procedural seed-based worlds, first-person camera and fly mode',
        'FBO-first renderer: the whole frame is composed off-screen on a stable GL3 core profile',
        'Block-based circuit system with four non-interfering signal colors and depth-first propagation',
        'Day/night cycle, weather, JSON-customizable gameplay data and integrity-checked chunk saves'
      ],
      github: 'https://github.com/SeanHank/Atom',
      demo: null
    },
    {
      id: 7,
      title: 'PFLE',
      description: 'A language engine that learns English WITHOUT learning parameters.',
      category: 'other',
      image: '',
      technologies: ['Python', 'Symbolic AI', 'NLP', 'Z3'],
      features: [
        'Symbolic AI engine with zero learned parameters — no gradients, no weight tensors',
        'CCG + CKY parser, λ-calculus → DRS → FOL semantics, Z3 SMT reasoning with a pure-Python fallback',
        'Proof-carrying knowledge base: every fact needs a certificate, with KNOWN/INFERRED/HYPOTHETICAL/UNKNOWN states',
        'Pearl do-calculus causal engine, FOIL rule induction and Popperian falsifiability auto-retraction',
        'Curiosity-driven learning autonomously fetches facts from Wikidata, DBpedia, WordNet, ConceptNet and Wikipedia'
      ],
      github: 'https://github.com/SeanHank/PFLE',
      demo: null
    },
    {
      id: 8,
      title: 'CliffMessenger',
      description: 'An E2EE secure messenger.',
      category: 'mobile',
      image: '',
      technologies: ['Flutter', 'Dart', 'WebSocket', 'mDNS', 'SQLCipher'],
      features: [
        'End-to-end encrypted messenger; one app acts as both a self-hosted server and a client',
        'AES-256-GCM messages, RSA-2048 OAEP key exchange and per-member wrapped group keys',
        'LAN discovery over mDNS — no central infrastructure and no internet dependency',
        'Offline message queue, chunked encrypted file transfer and device-bound SQLCipher storage'
      ],
      github: 'https://github.com/SeanHank/CliffMessenger',
      demo: null
    },
    {
      id: 9,
      title: 'WorldSimApp',
      description: 'Virtual global geopolitical and economic simulation platform.',
      category: 'desktop',
      image: '',
      technologies: ['C#', 'Avalonia', '.NET 8', 'Simulation'],
      features: [
        'Desktop geopolitical and economic world simulator built on .NET 8 + Avalonia',
        'Taylor Rule monetary policy, Phillips curve, trade/sanctions and industry-chain economics',
        'Political systems with elections and crises, military with war fatigue, alliances and international organizations',
        'Event-driven narrative, historical memory, path dependence and demographic modeling'
      ],
      github: 'https://github.com/SeanHank/WorldSimApp',
      demo: null
    }
  ],

  experience: [
    {
      id: 1,
      company: 'CREC JOINT VENTURE',
      position: 'Software Development & Testing',
      period: '03.08.2026 - 28.08.2026',
      description: 'Development of enterprise data processing applications and microservices architecture.',
      responsibilities: [
        'Data Extraction & Preparation',
        'Settlement & Payment Analysis',
        'Testing & Validation',
        'Process Optimization',
        'Reporting & Documentation'
      ],
      technologies: ['Python', 'Excel', 'MySQL']
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
