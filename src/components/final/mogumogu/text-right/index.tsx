import React from "react";
import styles from "./index.module.scss";

type TextRightProps = {
    children?: React.ReactNode;
};

export const TextRight: React.FC<TextRightProps> = ({ children }) => {
    return <div className={styles.right}>{children}</div>;
};
