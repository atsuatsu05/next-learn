"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

type CounterProps = {
    // children: React.ReactNode;
    // value: string | number;
    // quantity: string | number;
};

export const Counter: React.FC<CounterProps> = () => {
    const [count, setCount] = useState(1);
    const handleClickCountUp = () => {
        if (count >= 10) {
            setCount;
        } else {
            setCount((count) => count + 1);
        }
    };
    const handleClickCountDown = () => {
        if (count <= 0) {
            setCount;
        } else {
            setCount((count) => count - 1);
        }
    };
    //ローカルストレージへの保存
    const cartAddQuantity = localStorage.setItem("quantity", String(count));

    return (
        <>
            <div className={styles.box}>
                <button onClick={handleClickCountDown} className={styles.btn}>
                    ➖
                </button>

                <input
                    className={styles.input}
                    // onChange={(e) => {
                    //     cartAddQuantity;
                    // }}
                    value={count}
                />
                <button onClick={handleClickCountUp} className={styles.btn}>
                    ➕
                </button>
            </div>
        </>
    );
};
