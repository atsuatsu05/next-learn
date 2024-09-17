"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";

interface CounterProps {
    initialQuantity?: number;
    onQuantityChange: (quantity: number) => void; //引数として数量を受け取り、何も返さない
}

export const Counter: React.FC<CounterProps> = ({
    initialQuantity = 1,
    onQuantityChange,
}) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const handleClickCountUp = () => {
        if (quantity < 10) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };
    const handleClickCountDown = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    return (
        <>
            <div className={styles.box}>
                <button onClick={handleClickCountDown} className={styles.btn}>
                    ➖
                </button>

                <span className={styles.input}>{quantity}</span>

                <button onClick={handleClickCountUp} className={styles.btn}>
                    ➕
                </button>
            </div>
        </>
    );
};
