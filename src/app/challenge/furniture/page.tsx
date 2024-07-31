import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export const metadata: Metadata = {
    title: "Top",
    description: "Furniture DesignのTOPページ",
};

export default function Page() {
    return (
        <div className={styles.topContainer}>
            <Image
                src="/challenge/furniture/main.png"
                width={1000}
                height={600}
                alt=""
                className={styles.main}
            />
            <h2 className={styles["h2-title"]}>About</h2>
            <p className={styles.text}>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h2 className={styles["h2-title"]}>Products</h2>
            <div className={styles.products}>
                <div className={styles["products-div"]}>
                    <Link href="/challenge/furniture/products/detail">
                        <Image
                            src="/challenge/furniture/products.png"
                            width={300}
                            height={300}
                            alt=""
                        />
                    </Link>
                    <p className={styles["pd-title"]}>プロダクトタイトル</p>
                    <p className={styles["pd-title"]}>¥99,999 +tax</p>
                </div>
                <div className={styles["products-div"]}>
                    <Link href="/challenge/furniture/products/detail">
                        <Image
                            src="/challenge/furniture/products.png"
                            width={300}
                            height={300}
                            alt=""
                        />
                    </Link>
                    <p className={styles["pd-title"]}>プロダクトタイトル</p>
                    <p className={styles["pd-title"]}>¥99,999 +tax</p>
                </div>
                <div className={styles["products-div"]}>
                    <Link href="/challenge/furniture/products/detail">
                        <Image
                            src="/challenge/furniture/products.png"
                            width={300}
                            height={300}
                            alt=""
                        />
                    </Link>
                    <p className={styles["pd-title"]}>プロダクトタイトル</p>
                    <p className={styles["pd-title"]}>¥99,999 +tax</p>
                </div>
            </div>

            <Link
                href="/challenge/furniture/products"
                className={styles.viewMore}
            >
                View More
            </Link>
        </div>
    );
}
