import React from "react";
import styles from "./index.module.scss";

type WrapperProps = {
    children?: React.ReactNode;
    style?:
        | "top"
        | "topProducts"
        | "products"
        | "about"
        | "detail"
        | "back"
        | "company"
        | "contact";
};

export const Wrapper: React.FC<WrapperProps> = ({ children, style }) => {
    return <div className={styles[style!]}>{children}</div>;
};
