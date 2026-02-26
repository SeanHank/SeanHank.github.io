export const profile = {
    displayName: {
        zh: "霄汉",
        en: "Sean Hank",
    },
    tagline: {
        zh: "全栈：AI / 游戏开发 / UI+UX 设计",
        en: "Full-stack: AI / Game Dev / UI+UX Design",
    },

    avatar: {
        src: "/avatar-placeholder.png",
        alt: "Avatar",
    },

    bio: {
        zh: [
            "我是一名大一学生。主要做AI应用与游戏设计，专注于系统架构设计；擅长把需求拆解成可落地的方案并快速交付。",
            "技术栈以Python、C#、Java为主，前端常用Vue、React与现代工程化CI/CD，后端侧偏好ASP.NET、Java和Python。在项目中我经常负责架构设计与核心模块开发并产出高稳定性产品。",
            "我希望做AI 应用、游戏开发、工具产品UI+UX相关的事情，关注用户体验、稳定性、可维护性与可扩展性。如果你在做AI应用、游戏开发或需要UI+UX设计，欢迎通过邮箱/社交账号联系我。"
        ],
        en: [
            "I’m a first-year university student. I mainly work on AI applications and game design, with a focus on system architecture. I’m good at breaking down requirements into actionable solutions and delivering quickly.",
            "My core stack includes Python, C#, and Java. On the frontend, I often use Vue and React with modern engineering practices such as CI/CD. On the backend, I prefer ASP.NET, Java, and Python. In projects, I frequently take ownership of architecture design and core module development, delivering highly stable products.",
            "I’m looking to work on AI applications, game development, tool products, and UI/UX design. I care about user experience, reliability, maintainability, and scalability. If you’re building AI apps or games, or need UI/UX design support, feel free to reach out via email or social media."
        ],
    },

    links: {
        github: "https://github.com/SeanHank",
        x: "https://x.com/Xiao3631Han",
        email: "mailto:xiaohanaus@gmail.com",
        resume: "",
    },

    skills: {
        Languages: ["Python", "C#", "Java", "TypeScript", "Rust"],
        Frontend: ["Vue", "React", "Node.js", "Fluent UI"],
        Backend: [ "ASP.NET", "libGDX", "Unity", "lwjgl" ,"Flask", "Django", "PyTorch"],
        Cloud: ["Azure", "AWS"],
        Database: ["MySQL", "sqlite3"],
        Tooling: ["Git", "Docker", "CI/CD"],
    },

    projects: [
        {
            title: { zh: "Atom", en: "Atom" },
            description: {
                zh: "不止于此。",
                en: "Not just a game. ",
            },
            stack: ["Java", "libGDX", "lwjgl"],
            image: "/AtomScreenshot.png",
            repo: "https://github.com/SeanHank/Atom",
            demo: "", // 可选
        },
        {
            title: { zh: "霄汉的个人网页", en: "SeanHank.github.io" },
            description: {
                zh: "端到端实现的作品集主页：Fluent UI 风格 + 双语切换 + 自动主题，数据驱动内容结构，便于持续迭代与部署到 GitHub Pages。",
                en: "An end-to-end portfolio site with Fluent UI styling, bilingual support, and system-based theming. Data-driven content structure for easy iteration and GitHub Pages deployment.",
            },
            stack: ["Vue", "React", "Fluent UI"],
            image: "",
            repo: "https://github.com/USERNAME/SeanHank.github.io", // TODO
            demo: "",
        },
    ],

    experiences: [
        {
            title: { zh: "学习经历", en: "Education Experience" },
            org: { zh: "北京工业大学 / 都柏林国际学院 / 北京", en: "Beijing University of Technology  / Beijing-Dublin International College / Beijing" },
            period: "2025 - 2029",
            bullets: {
                zh: ["参加 MCM/ICM，团队完成E题建模与论文写作，负责建模、编程、可视化。完成四大模块的可视化与结论汇总，确保论文叙事清晰、结果可解释且可复现。",
                    "学习并实践：数据结构与算法、面向对象、数据库基础；用 Python/C#/Java 完成课程项目与练习。"],
                en: ["Participated in MCM/ICM and worked on Problem E; responsible for modeling/coding/visualization in a team setting, Created 4 modules to ensure clear storytelling, explainable results, and reproducible analysis.",
                    "Studied and practiced data structures & algorithms, OOP, and database fundamentals; built coursework projects in Python/C#/Java."],
            },
        },
    ],
} as const;

export type Profile = typeof profile;