export type Lang = "zh" | "en";

export const strings = {
    zh: {
        nav: { home: "主页", projects: "项目", skills: "技能栈", experience: "经历", contact: "联系" },
        hero: { tagline: "",
            bioTitle: "为世界编写代码，为故事构建框架。" },
        cta: { contact: "联系我", resume: "简历", github: "GitHub", x: "X" },
        sections: { projects: "项目", skills: "技能栈", experience: "经历", contact: "联系" },
        // placeholders: {
        //     bio: [
        //         "",
        //         "",
        //         "",
        //     ],
        //     school: "",
        //     contactHint: "",
        // },
        misc: { builtWith: "Built with Fluent UI · Hosted on GitHub Pages" },
    },
    en: {
        nav: { home: "Home", projects: "Projects", skills: "Skills", experience: "Experience", contact: "Contact" },
        hero: { tagline: "",
            bioTitle: "Code the world, architect the story. " },
        cta: { contact: "Contact Me", resume: "Resume", github: "GitHub", x: "X" },
        sections: { projects: "Projects", skills: "Skills", experience: "Experience", contact: "Contact" },
        // placeholders: {
        //     bio: [
        //         "",
        //         "",
        //         "",
        //     ],
        //     school: "",
        //     contactHint: "",
        // },
        misc: { builtWith: "Built with Fluent UI · Hosted on GitHub Pages" },
    },
} as const;