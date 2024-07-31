import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export const metadata: Metadata = {
    title: "Detail",
    description: "Furniture DesignのDetailページ",
};
export default function Page() {
    const size = "W999 × D999 × H999";
    const color = "テキスト";
    const material = "テキストテキストテキスト";

    return (
        <div className={styles.container}>
            <p className={styles.title}>ブログタイトル</p>
            <div className={styles.contents}>
                <div className={styles.left}>
                    <Image
                        src="/challenge/furniture/detail.png"
                        width={400}
                        height={400}
                        alt="detail"
                    />
                </div>
                <div className={styles.right}>
                    <p>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                    <p className={styles.p}>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                    <p className={styles.price}>¥99,999 +tax</p>
                    <dl className={styles.dl}>
                        <dt className={styles.dt}>SIZE:</dt>
                        <dd>{size}</dd>
                    </dl>
                    <dl className={styles.dl}>
                        <dt className={styles.dt}>COLOR:</dt>
                        <dd>{color}</dd>
                    </dl>
                    <dl className={styles.dl}>
                        <dt className={styles.dt}>MATERIA:</dt>
                        <dd>{material}</dd>
                    </dl>

                    <div className={styles.back}>
                        <p>
                            <Link
                                href="/challenge/furniture/products"
                                className={styles.link}
                            >
                                Back To Products
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
