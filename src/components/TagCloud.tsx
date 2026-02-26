import { Tag, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    row: { display: "flex", flexWrap: "wrap", gap: "8px" },
});

export function TagCloud(props: { items: string[] }) {
    const styles = useStyles();
    return (
        <div className={styles.row}>
            {props.items.map((t) => (
                <Tag key={t} appearance="outline">
                    {t}
                </Tag>
            ))}
        </div>
    );
}