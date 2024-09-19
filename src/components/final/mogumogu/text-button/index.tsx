import React from "react";
import styles from "./index.module.scss";

interface TextButtonProps {
    children: React.ReactNode;
}
export const TextButton: React.FC<TextButtonProps> = ({ children }) => {
    return <button className={styles.text}>{children}</button>;
};
