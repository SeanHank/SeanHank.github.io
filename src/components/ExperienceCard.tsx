import { Card, CardHeader, Text, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    body: { padding: "12px", display: "grid", gap: "6px" },
    ul: { margin: "6px 0 0", paddingLeft: "18px" },
});

export type Experience = {
    title: string;
    org: string;
    period: string;
    bullets: readonly string[];
};

export function ExperienceCard({ e }: { e: Experience }) {
    const styles = useStyles();
    return (
        <Card>
            <CardHeader header={<Text weight="semibold">{e.title}</Text>} />
            <div className={styles.body}>
                <Text style={{ lineHeight: "1.75" }}>{e.org}</Text>
                <Text size={200} style={{ opacity: 0.8, lineHeight: "1.75" }}>
                    {e.period}
                </Text>
                <ul className={styles.ul}>
                    {e.bullets.map((b) => (
                        <li key={b}>
                            <Text style={{ lineHeight: "1.75" }}>{b}</Text>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}