"use client";
import React, { useContext } from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type CartButtonProps = {
    children: React.ReactNode;
    value?: string | number;
};

export const CartButton: React.FC<CartButtonProps> = ({ children, value }) => {
    // const { addToCart, cartItems } = useContext(CartContext);
    // const cartItemCount = cartItems[id];
    const cartAddProduct = localStorage.setItem(
        "product",
        JSON.stringify({ value }),
    );
    return (
        <>
            <button
                className={styles.button}
                onClick={(e) => {
                    // cartAddProduct;
                    localStorage.setItem("product", JSON.stringify({ value }));
                }}
            >
                <p className={styles.text}>{children}</p>
            </button>
        </>
    );
};
