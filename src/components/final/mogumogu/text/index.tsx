import React from "react";
import styles from "./index.module.scss";

type TextProps = {
    align?: "right" | "center" | "left";
    children: React.ReactNode;
};
export const Text: React.FC<TextProps> = ({ children, align }) => {
    return <p className={styles.text}>{children}</p>;
};
