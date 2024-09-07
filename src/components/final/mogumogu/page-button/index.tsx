import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type PageButtonProps = {
    children: React.ReactNode;
};

export const PageButton: React.FC<PageButtonProps> = ({ children }) => {
    return (
        <>
            <div className={styles.button}>
                <p>{children}</p>
            </div>
        </>
    );
};
