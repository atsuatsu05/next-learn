import React from "react";
import styles from "./index.module.scss";

type MenuTitleProps = {
    children?: React.ReactNode;
    id?: string;
};

export const MenuTitle: React.FC<MenuTitleProps> = ({ children, id }) => {
    return (
        <h2 id={id} className={styles.h2}>
            {children}
        </h2>
    );
};
