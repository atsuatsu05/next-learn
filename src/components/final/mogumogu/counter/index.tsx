"use client";
import React, { useState } from "react";

import styles from "./index.module.scss";

export const Counter = () => {
    // const [data, setData] = useState<{ quantity: number }>();
    // useEffect(() => {
    //     const getCounter = async () => {
    //         const data = await client.get({
    //             endpoint: "donuts",
    //         });
    //         setData(data);
    //     };
    //     getCounter();
    // }, []);

    // console.log(data);

    const [count, setCount] = useState(1);
    const handleClickCountUp = () => {
        if (count >= 10) {
            setCount;
        } else {
            setCount((count) => count + 1);
        }
    };
    const handleClickCountDown = () => {
        if (count <= 1) {
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

                <input className={styles.input} value={count} />

                <button onClick={handleClickCountUp} className={styles.btn}>
                    ➕
                </button>
            </div>
        </>
    );
};
