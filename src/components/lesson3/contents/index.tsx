import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type ContentsProps = {
    children: React.ReactNode;
};

export const Contents: React.FC<ContentsProps> = ({ children }) => {
    return <div className={styles.contents}>{children}</div>;
};
