import React from "react";
import styles from "./index.module.scss";

type WrapperProps = {
    children?: React.ReactNode;
    style?:
        | "top"
        | "menu"
        | "detail"
        | "company"
        | "contact"
        | "cart"
        | "mypage";
};

export const Wrapper: React.FC<WrapperProps> = ({ children, style }) => {
    return <div className={styles[style!]}>{children}</div>;
};
