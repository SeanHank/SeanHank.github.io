import { useEffect, useState } from "react";

export type SystemTheme = "light" | "dark";

export function useSystemTheme(): SystemTheme {
    const get = (): SystemTheme =>
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

    const [theme, setTheme] = useState<SystemTheme>(get);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => setTheme(mq.matches ? "dark" : "light");

        if (mq.addEventListener) mq.addEventListener("change", handler);
        else mq.addListener(handler);

        return () => {
            if (mq.removeEventListener) mq.removeEventListener("change", handler);
            else mq.removeListener(handler);
        };
    }, []);

    return theme;
}