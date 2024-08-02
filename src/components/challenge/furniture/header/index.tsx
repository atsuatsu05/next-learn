import React from "react";
import styles from "./index.module.scss";

type HeaderProps = {
    children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.logo}>{children}</h1>
            <span className={styles["hm-top"]}></span>
            <span className={styles["hm-bottom"]}></span>
        </div>
    );
};
