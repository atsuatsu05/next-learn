"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { HeaderIcon } from "@/components/final/index";

export const HeaderCartCount: React.FC = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

        const totalCount = cartItems.reduce(
            (sum: number, item: { quantity: number }) => sum + item.quantity,
            0,
        );
        setCartCount(totalCount);
    }, []);

    return (
        <>
            <div className={styles.headerIcon}>
                <HeaderIcon
                    src={"/final/mogumogu/cart_icon.png"}
                    alt="カート"
                    href={"/final/mogumogu/cart"}
                />
                <span className={styles.span}>{cartCount}</span>
            </div>
        </>
    );
};
