import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type SectionTitleProps = {
    children: React.ReactNode;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return (
        <div className={styles.center}>
            <h2 className={styles.h2}>{children}</h2>
        </div>
    );
};
