"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export const CartCount: React.FC = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        //SSR時のwindowの確認
        if (typeof window !== "undefined") {
            //カート数の更新
            const updateCartCount = () => {
                const cartItems = JSON.parse(
                    localStorage.getItem("cart") || "[]",
                );
                const totalCount = cartItems.reduce(
                    (sum: number, item: { quantity: number }) =>
                        sum + item.quantity,
                    0,
                );
                setCartCount(totalCount);
            };
            updateCartCount();

            const handleCartUpdated = () => updateCartCount();
            //カスタムイベントを受け取る
            window.addEventListener("cartUpdated", handleCartUpdated);

            return () => {
                window.addEventListener("cartUpdated", handleCartUpdated);
            };
        }
    }, []);

    return (
        <>
            <span className={styles.span}>{cartCount}</span>
        </>
    );
};
