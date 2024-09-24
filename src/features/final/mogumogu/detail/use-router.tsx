"use client";
import React from "react";
import styles from "./style.module.scss";

import { useRouter } from "next/navigation";

export const UseRouter: React.FC = () => {
    const router = useRouter();

    return (
        <>
            <div className={styles.div}>
                <button onClick={() => router.back()} className={styles.button}>
                    <p className={styles.p}>前の画面へ戻る</p>
                </button>
            </div>
        </>
    );
};
