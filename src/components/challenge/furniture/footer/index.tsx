import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

type FooterProps = {
    children: React.ReactNode;
};

export const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link
                            href="/challenge/furniture/products"
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
            </nav>
            <p className={styles.copyRight}>© Furniture Design</p>
        </div>
    );
};
