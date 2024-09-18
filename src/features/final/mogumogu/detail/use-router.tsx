"use client";
import React from "react"; //nodeモジュールから読んできている
import Link from "next/link";
import styles from "./style.module.scss";

import { useRouter } from "next/navigation";

export const UseRouter: React.FC = () => {
    const router = useRouter();

    return (
        <>
            <Link href="" onClick={() => router.back()} className={styles.link}>
                <p className={styles.p}>前の画面へ戻る</p>
            </Link>
        </>
    );
};
