import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type PageTitleProps = {
    children: React.ReactNode;
};

export const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
    return (
        <>
            <h3 className={styles.h3}>{children}</h3>
        </>
    );
};
