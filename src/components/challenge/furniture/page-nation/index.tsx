"use client";
import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

type PageNationProps = {
    children?: React.ReactNode;
};

export const PageNation: React.FC<PageNationProps> = () => {
    return (
        <div className={styles.pagination}>
            <p className={styles.pageLink}>
                <Link
                    href="/challenge/furniture/products/1"
                    className={styles.link}
                >
                    1
                </Link>
            </p>

            <p className={styles.pageLink}>
                <Link
                    href="/challenge/furniture/products/2"
                    className={styles.link}
                >
                    2
                </Link>
            </p>
        </div>
    );
};
