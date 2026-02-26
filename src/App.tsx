import {
    FluentProvider,
    webLightTheme,
    webDarkTheme,
    makeStyles,
    tokens,
    Button,
    Card,
    CardHeader,
    Divider,
    Link,
    Text,
    Title1,
    Subtitle1,
    Toolbar,
    ToolbarButton,
    Avatar,
} from "@fluentui/react-components";
import {
    Mail24Regular,
    Globe24Regular,
    Person24Regular,
} from "@fluentui/react-icons";
import { useMemo, useState, useEffect } from "react";

import { useSystemTheme } from "./hooks/useSystemTheme";
import { profile } from "./data/profile";
import { strings } from "./i18n/strings";
import type { Lang } from "./i18n/strings";
import { Section } from "./components/Section";
import { TagCloud } from "./components/TagCloud";
import { ProjectCard } from "./components/ProjectCard";
import { ExperienceCard } from "./components/ExperienceCard";

const AVATAR_SIZE = 96;

const useStyles = makeStyles({
    page: {
        minHeight: "100vh",
        backgroundColor: tokens.colorNeutralBackground1,
        color: tokens.colorNeutralForeground1,
    },
    container: {
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "22px 18px 56px",
        display: "grid",
        gap: "16px",
    },
    topbar: {
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(10px)",
        backgroundColor:
            "color-mix(in srgb, var(--colorNeutralBackground1) 78%, transparent)",
        borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
        padding: "10px 0",
    },
    topbarInner: {
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "0 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
    },
    brand: { display: "flex", alignItems: "center", gap: "10px" },

    hero: {
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: "16px",
        alignItems: "stretch",
        "@media (max-width: 920px)": {
            gridTemplateColumns: "1fr",
        },
    },

    heroLeft: { display: "grid", gap: "10px" },
    heroRight: { display: "grid", gap: "12px" },

    avatarImg: {
        width: `${AVATAR_SIZE}px`,
        height: `${AVATAR_SIZE}px`,
        borderRadius: tokens.borderRadiusCircular,
        objectFit: "cover",
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        display: "block",
    },

    avatarFallback: {
        width: `${AVATAR_SIZE}px`,
        height: `${AVATAR_SIZE}px`,
        borderRadius: tokens.borderRadiusCircular,
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },

    actions: { display: "flex", flexWrap: "wrap", gap: "10px" },

    twoCol: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        "@media (max-width: 920px)": {
            gridTemplateColumns: "1fr",
        },
    },

    projectGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        "@media (max-width: 920px)": {
            gridTemplateColumns: "1fr",
        },
    },

    skillsGrid: { display: "grid", gap: "12px" },
    footer: { opacity: 0.8, paddingTop: "6px" },
});

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
    const styles = useStyles();

    // const sysTheme = useSystemTheme();
    // const theme = useMemo(
    //     () => (sysTheme === "dark" ? webDarkTheme : webLightTheme),
    //     [sysTheme]
    // );
    const sysTheme = useSystemTheme();

    type ThemeMode = "system" | "light" | "dark";
    const [themeMode, setThemeMode] = useState<ThemeMode>("system");

    const resolvedTheme = themeMode === "system" ? sysTheme : themeMode;

    const theme = useMemo(
        () => (resolvedTheme === "dark" ? webDarkTheme : webLightTheme),
        [resolvedTheme]
    );

    const [lang, setLang] = useState<Lang>("en");
    const t = strings[lang];

    const name = profile.displayName[lang];
    const tagline = profile.tagline[lang];
    const bio = profile.bio[lang];

    const projects = profile.projects.map((p) => ({
        title: p.title[lang],
        description: p.description[lang],
        stack: [...p.stack],
        image: p.image,
        repo: p.repo,
        demo: p.demo,
    }));

    const exps = profile.experiences.map((e) => ({
        title: e.title[lang],
        org: e.org[lang],
        period: e.period,
        bullets: e.bullets[lang],
    }));

    const [avatarFailed, setAvatarFailed] = useState(false);

    useEffect(() => {
        setAvatarFailed(false);
    }, [profile.avatar.src]);

    const hasAvatarSrc =
        typeof profile.avatar.src === "string" &&
        profile.avatar.src.trim().length > 0;

    return (
        <FluentProvider theme={theme} className={styles.page}>
            <div className={styles.topbar}>
                <div className={styles.topbarInner}>
                    <div className={styles.brand}>
                        <Person24Regular />
                        <Text weight="semibold">{name}</Text>
                        {/*<Text weight="semilight">*/}
                        {/*    {sysTheme === "dark" ? "Dark" : "Light"}*/}
                        {/*</Text>*/}

                    </div>

                    <Toolbar aria-label="Navigation">
                        <ToolbarButton onClick={() => scrollToId("home")}>
                            {t.nav.home}
                        </ToolbarButton>
                        <ToolbarButton onClick={() => scrollToId("projects")}>
                            {t.nav.projects}
                        </ToolbarButton>
                        <ToolbarButton onClick={() => scrollToId("skills")}>
                            {t.nav.skills}
                        </ToolbarButton>
                        <ToolbarButton onClick={() => scrollToId("experience")}>
                            {t.nav.experience}
                        </ToolbarButton>
                        <ToolbarButton onClick={() => scrollToId("contact")}>
                            {t.nav.contact}
                        </ToolbarButton>
                        <Divider vertical />
                        <ToolbarButton
                            icon={<Globe24Regular />}
                            onClick={() =>
                                setLang((v) => (v === "zh" ? "en" : "zh"))
                            }
                        >
                            {lang === "zh" ? "中文" : "EN"}
                        </ToolbarButton>
                        <ToolbarButton
                            onClick={() =>
                                setThemeMode((m) => (m === "system" ? "dark" : m === "dark" ? "light" : "system"))
                            }
                        >
                            {themeMode === "system"
                                ? `System`
                                : themeMode === "dark"
                                    ? "Dark"
                                    : "Light"}
                        </ToolbarButton>
                    </Toolbar>
                </div>
            </div>

            <div className={styles.container} id="home">
                <Card>
                    <div className={styles.hero} style={{ padding: "16px" }}>
                        <div className={styles.heroLeft}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "14px",
                                }}
                            >
                                {hasAvatarSrc && !avatarFailed ? (
                                    <img
                                        className={styles.avatarImg}
                                        src={profile.avatar.src}
                                        alt={profile.avatar.alt}
                                        onError={() => setAvatarFailed(true)}
                                    />
                                ) : (
                                    <div className={styles.avatarFallback}>
                                        <Avatar
                                            name={name}
                                            size={96}
                                        />
                                    </div>
                                )}

                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <Title1>{name}</Title1>
                                    <Subtitle1>{tagline}</Subtitle1>
                                </div>
                            </div>

                            <Text weight="semibold">{t.hero.bioTitle}</Text>
                            {bio.map((p, i) => (
                                <Text key={i} style={{ lineHeight: "1.75" }}>{p}</Text>
                            ))}

                            <div className={styles.actions}>
                                <Button
                                    appearance="primary"
                                    icon={<Mail24Regular />}
                                    as="a"
                                    href={
                                        profile.links.email ||
                                        "mailto:xiaohanaus@gmail.com"
                                    }
                                >
                                    {t.cta.contact}
                                </Button>

                                <Button
                                    as="a"
                                    href={
                                        profile.links.github ||
                                        "https://github.com/SeanHank"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </Button>

                                <Button
                                    as="a"
                                    href={
                                        profile.links.x ||
                                        "https://x.com/Xiao3631Han"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    X
                                </Button>

                                {profile.links.resume ? (
                                    <Button
                                        as="a"
                                        href={profile.links.resume}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {t.cta.resume}
                                    </Button>
                                ) : null}
                            </div>
                        </div>

                        <div className={styles.heroRight}>
                            <Card>
                                <CardHeader
                                    header={
                                        <Text weight="semibold">
                                            {t.sections.skills}
                                        </Text>
                                    }
                                />
                                <Divider />
                                <div
                                    className={styles.skillsGrid}
                                    style={{ padding: "12px" }}
                                >
                                    {Object.entries(profile.skills).map(
                                        ([group, items]) => (
                                            <div
                                                key={group}
                                                style={{
                                                    display: "grid",
                                                    gap: "6px",
                                                }}
                                            >
                                                <Text weight="semibold">
                                                    {group}
                                                </Text>
                                                <TagCloud items={items} />
                                            </div>
                                        )
                                    )}
                                </div>
                            </Card>
                        </div>
                    </div>
                </Card>

                <Section title={t.sections.projects} id="projects">
                    <div className={styles.projectGrid}>
                        {projects.map((p) => (
                            <ProjectCard key={p.title} p={p} />
                        ))}
                    </div>
                </Section>

                <Section title={t.sections.skills} id="skills">
                    <div className={styles.skillsGrid}>
                        {Object.entries(profile.skills).map(([group, items]) => (
                            <div
                                key={group}
                                style={{ display: "grid", gap: "6px" }}
                            >
                                <Text weight="semibold">{group}</Text>
                                <TagCloud items={items} />
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title={t.sections.experience} id="experience">
                    <div className={styles.twoCol}>
                        {exps.map((e) => (
                            <ExperienceCard key={e.title} e={e} />
                        ))}
                    </div>
                </Section>

                <Section title={t.sections.contact} id="contact">
                    <Text style={{ lineHeight: "1.75" }}>
                        {lang === "zh"
                            ? "我很乐意聊聊 AI 应用、游戏开发、工具产品与 UI/UX 设计相关的话题。" +
                            "如果你有合作想法、项目讨论或实习机会，欢迎邮件联系我（我通常会在 24–72 小时内回复）。" +
                            "也欢迎通过 X 私信我，方便快速沟通。"
                            : "I’m happy to chat about AI applications, game development, tool products, and UI/UX design. " +
                            "For collaboration, project discussions, or internship opportunities, feel free to email me (I usually reply within 24–72 hours). " +
                            "You can also DM me on X for a quicker conversation. "}
                    </Text>

                    <div
                        className={styles.actions}
                        style={{ marginTop: "10px" }}
                    >
                        <Button
                            appearance="primary"
                            icon={<Mail24Regular />}
                            as="a"
                            href={
                                profile.links.email || "mailto:xiaohanaus@gmail.com"
                            }
                        >
                            {t.cta.contact}
                        </Button>

                        <Button
                            as="a"
                            href={
                                profile.links.github ||
                                "https://github.com/SeanHank"
                            }
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </Button>
                        <Button
                            as="a"
                            href={
                                profile.links.x ||
                                "https://x.com/Xiao3631Han"
                            }
                            target="_blank"
                            rel="noreferrer"
                        >
                            X
                        </Button>
                    </div>
                </Section>

                <div className={styles.footer}>
                    <Text size={200}>
                        {t.misc.builtWith} ·{" "}
                        <Link
                            href={
                                profile.links.github ||
                                "https://github.com/SeanHank"
                            }
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source
                        </Link>
                    </Text>
                </div>
            </div>
        </FluentProvider>
    );
}