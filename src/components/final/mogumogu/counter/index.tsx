"use client";

import React, { useState } from "react";
import styles from "./index.module.scss";

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const handleClickCountUp = () => {
        setCount((count) => count + 1);
    };
    const handleClickCountDown = () => {
        setCount((count) => count - 1);
    };
    return (
        <>
            <div className={styles.box}>
                <button onClick={handleClickCountDown} className={styles.btn}>
                    ➖
                </button>

                <span>{count}</span>
                <button onClick={handleClickCountUp} className={styles.btn}>
                    ➕
                </button>
            </div>
        </>
    );
};
