"use client";
// import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
// import { TextButton, HeaderIcon, LinkText } from "@/components/final/index";
import { HeaderCartCount } from "@/features/final/mogumogu/header-cart-count";
type HeaderProps = {
    children?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.logo}>
                <Link className={styles.logo} href="/final/mogumogu">
                    <Image
                        src="/final/mogumogu/logo.png"
                        width={240}
                        height={240}
                        alt="cafe mogumogu"
                        priority
                    />
                </Link>
            </h1>

            <div className={styles.navList}>
                <HeaderCartCount />
                <ul>
                    <li className={styles.li}>
                        <Link href="/final/mogumogu" className={styles.link}>
                            Top
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link
                            href="/final/mogumogu/menu"
                            className={styles.link}
                        >
                            Menu
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link
                            href="/final/mogumogu/shop"
                            className={styles.link}
                        >
                            Shop
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link
                            href="/final/mogumogu/contact"
                            className={styles.link}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
