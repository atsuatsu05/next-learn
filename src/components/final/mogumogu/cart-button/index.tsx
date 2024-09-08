import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type CartButtonProps = {
    children: React.ReactNode;
};

export const CartButton: React.FC<CartButtonProps> = ({ children }) => {
    return (
        <>
            <div className={styles.button}>
                <p className={styles.text}>{children}</p>
            </div>
        </>
    );
};
