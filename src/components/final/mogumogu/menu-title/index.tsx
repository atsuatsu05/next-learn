import React from "react";
import styles from "./index.module.scss";

type MenuTitleProps = {
    children?: React.ReactNode;
};

export const MenuTitle: React.FC<MenuTitleProps> = ({ children }) => {
    return <h2 className={styles.h2}>{children}</h2>;
};
