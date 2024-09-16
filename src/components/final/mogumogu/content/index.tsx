import React from "react";
import styles from "./index.module.scss";

type ContentProps = {
    children?: React.ReactNode;
};

export const Content: React.FC<ContentProps> = ({ children }) => {
    return <div className={styles.inner}>{children}</div>;
};
