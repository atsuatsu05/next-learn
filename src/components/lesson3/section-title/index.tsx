import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type SectionTitleProps = {
    children: React.ReactNode;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return <h1 className={styles.SectionTitle}>{children}</h1>;
};
