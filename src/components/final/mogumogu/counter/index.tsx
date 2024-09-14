"use client";

import React, { useState } from "react";
import styles from "./index.module.scss";

export const Counter: React.FC = () => {
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
    const countDownInvalid = count >= 0;
    return (
        <>
            <div className={styles.box}>
                <button onClick={handleClickCountDown} className={styles.btn}>
                    ➖
                </button>

                <input className={styles.input} value={count} />
                <button onClick={handleClickCountUp} className={styles.btn}>
                    ➕
                </button>
            </div>
        </>
    );
};
