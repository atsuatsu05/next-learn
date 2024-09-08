import React from "react";
import styles from "./index.module.scss";

type MenuItemBoxProps = {
    children?: React.ReactNode;
};

export const MenuItemBox: React.FC<MenuItemBoxProps> = ({ children }) => {
    return <div className={styles.menu}>{children}</div>;
};
