import React from "react";
import styles from "./index.module.scss";

type TextProps = {
    style: "text" | "about" | "complete";
    children: React.ReactNode;
};
export const Text: React.FC<TextProps> = ({ children, style }) => {
    return <p className={styles[style!]}>{children}</p>;
};
