import { Card, CardHeader, Divider, makeStyles, Text } from "@fluentui/react-components";
import React from "react";

const useStyles = makeStyles({
    root: { width: "100%" },
    body: { padding: "12px 14px 14px" },
});

export function Section(props: { title: string; id?: string; children: React.ReactNode }) {
    const styles = useStyles();
    return (
        <Card className={styles.root} id={props.id}>
            <CardHeader header={<Text weight="semibold">{props.title}</Text>} />
            <Divider />
            <div className={styles.body}>{props.children}</div>
        </Card>
    );
}