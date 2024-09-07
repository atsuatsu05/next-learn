import React from "react";
import styles from "./index.module.scss";

type SectionProps = {
    children?: React.ReactNode;
    style?: "about" | "menu" | "more";
};

export const Section: React.FC<SectionProps> = ({ children, style }) => {
    return <section className={styles[style!]}>{children}</section>;
};
