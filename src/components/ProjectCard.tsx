import {
    Card,
    CardHeader,
    CardPreview,
    Link,
    Text,
    makeStyles,
    tokens,
} from "@fluentui/react-components";
import { TagCloud } from "./TagCloud";

const useStyles = makeStyles({
    grid: { display: "grid", gap: "10px" },
    preview: {
        borderRadius: tokens.borderRadiusMedium,
        overflow: "hidden",
    },
    img: { width: "100%", height: "160px", objectFit: "cover", display: "block" },
    actions: { display: "flex", gap: "12px", flexWrap: "wrap" },
});

export type Project = {
    title: string;
    description: string;
    stack: readonly string[];
    image?: string;
    repo?: string;
    demo?: string;
};

export function ProjectCard({ p }: { p: Project }) {
    const styles = useStyles();
    return (
        <Card>
            <CardHeader header={<Text weight="semibold">{p.title}</Text>} />
            <div className={styles.grid} style={{ padding: "12px" }}>
                {p.image ? (
                    <CardPreview className={styles.preview}>
                        <img className={styles.img} src={p.image} alt={p.title} />
                    </CardPreview>
                ) : null}

                <Text>{p.description}</Text>
                <TagCloud items={p.stack} />

                <div className={styles.actions}>
                    {p.repo ? (
                        <Link href={p.repo} target="_blank" rel="noreferrer">
                            Repo
                        </Link>
                    ) : null}
                    {p.demo ? (
                        <Link href={p.demo} target="_blank" rel="noreferrer">
                            Demo
                        </Link>
                    ) : null}
                </div>
            </div>
        </Card>
    );
}