"use client";
import React, { useContext } from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";
import { CartContext } from "@/app/context/final/mogumogu/cart-context";

type CartButtonProps = {
    children: React.ReactNode;
};

export const CartButton: React.FC<CartButtonProps> = ({ children }) => {
    const { addToCart, cartItems } = useContext(CartContext);
    const cartItemCount = cartItems[id];
    return (
        <>
            <button className={styles.button} onClick={() => addToCart(id)}>
                <p className={styles.text}>{children}</p>
            </button>
        </>
    );
};
