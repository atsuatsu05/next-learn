import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type PageButtonProps = {
    children: React.ReactNode;
    onConfirmOrder?: () => void;
    onClick?: () => void;
};

export const PageButton: React.FC<PageButtonProps> = ({
    children,
    onConfirmOrder,
}) => {
    return (
        <>
            <div onClick={onConfirmOrder} className={styles.button}>
                {children}
            </div>
        </>
    );
};
