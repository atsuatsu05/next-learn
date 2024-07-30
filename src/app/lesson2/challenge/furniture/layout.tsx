import { Metadata } from "next";
import Link from "next/link";
import "@/styles/index.scss";
import styles from "./style.module.scss";

export const metadata: Metadata = {
    title: "TOP|Furniture Design",
    description: "TOPページ",
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.logo}>Furniture Design</h1>
                <span className={styles["hm-top"]}></span>
                <span className={styles["hm-bottom"]}></span>
            </div>
            <body>{children}</body>

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
        </div>
    );
}
