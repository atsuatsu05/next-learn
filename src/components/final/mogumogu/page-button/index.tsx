import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type PageButtonProps = {
    children: React.ReactNode;
    onConfirmOrder?: () => void;
};

export const PageButton: React.FC<PageButtonProps> = ({
    children,
    onConfirmOrder,
}) => {
    return (
        <>
            <button onClick={onConfirmOrder} className={styles.button}>
                {children}
            </button>
        </>
    );
};
