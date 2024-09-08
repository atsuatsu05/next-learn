import React from "react";
import styles from "./index.module.scss";

type ContainerProps = {
    children?: React.ReactNode;
    style: "item" | "mypage" | "container";
};

export const Container: React.FC<ContainerProps> = ({ children, style }) => {
    return <div className={styles![style]}>{children}</div>;
};
