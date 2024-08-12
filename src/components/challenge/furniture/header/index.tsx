"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import clsx from "clsx";

type HeaderProps = {
    children: React.ReactNode;
    opened?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ children, opened = false }) => {
    const [open, setOpen] = useState(opened);
    const handleClick = () => setOpen((open) => !open);

    return (
        <div className={styles.header}>
            <div>
                <h1 className={styles.logo}>{children}</h1>
                <div
                    className={clsx(styles.btn, open && styles.open)}
                    onClick={handleClick}
                >
                    <span className={styles.hmTop}></span>
                    <span className={styles.hmBottom}></span>
                </div>
            </div>

            <ul className={clsx(styles.navList, open && styles.open)}>
                <li className={styles.li}>
                    <Link
                        href="/challenge/furniture/products/1
"
                        className={styles.link}
                    >
                        PRODUCTS
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link
                        href="/challenge/furniture/about"
                        className={styles.link}
                    >
                        ABOUT
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link
                        href="/challenge/furniture/company"
                        className={styles.link}
                    >
                        COMPANY
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="#" className={styles.link}>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    );
};

// type HeaderMenuProps = {
//     opened?: boolean;
// };

// export const HeaderMenu: React.FC<HeaderMenuProps> = ({ opened = false }) => {
//     const [open, setOpen] = useState(opened);
//     const handleClick = () => setOpen((open) => !open);
//     return (
//         <div
//             className={clsx(styles.wrapper, open && styles.open)}
//             onClick={handleClick}
//         >
//             <span className={styles.hmTop}></span>
//             <span className={styles.hmBottom}></span>
//         </div>
//     );
// };
