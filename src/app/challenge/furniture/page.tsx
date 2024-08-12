import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { Title, Item } from "@/components/challenge";

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
            <Title>About</Title>
            <p className={styles.text}>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
            </p>
            <Title>Products</Title>
            <div className={styles.products}>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
            </div>
            <Link
                href="/challenge/furniture/products/1"
                className={styles.viewMore}
            >
                View More
            </Link>
        </div>
    );
}
