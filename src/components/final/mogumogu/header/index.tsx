"use client";
// import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { HeaderIcon } from "../header-icon";
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
                <div className={styles.headerIcon}>
                    <HeaderIcon
                        src={"/final/mogumogu/cart_icon.png"}
                        alt="カート"
                        href={"/final/mogumogu/cart"}
                    />
                    <HeaderIcon
                        src={"/final/mogumogu/mypage_icon.png"}
                        alt="マイページ"
                        href={"/final/mogumogu/my-page"}
                    />
                </div>
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
                            href="/final/mogumogu/company"
                            className={styles.link}
                        >
                            Company
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
