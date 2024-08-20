import React from "react";
import styles from "./index.module.scss";

type TitleProps = {
    children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <div>
            <h2 className={styles["h2-title"]}>{children}</h2>
        </div>
    );
};
