"use client";
import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type CartButtonProps = {
    children: React.ReactNode;
    value: string | number;
    quantity: string | number;
};

export const CartButton: React.FC<CartButtonProps> = ({
    children,
    value,
    quantity,
}) => {
    //カートへ追加ボタンを押したら、ローカルストレージへ保存される
    const handleClick = () => {
        localStorage.setItem("product", JSON.stringify({ value }));
        localStorage.setItem("quantity", JSON.stringify({ quantity }));
    };
    return (
        <>
            <button className={styles.button} onClick={handleClick}>
                <p className={styles.text}>{children}</p>
            </button>
        </>
    );
};
