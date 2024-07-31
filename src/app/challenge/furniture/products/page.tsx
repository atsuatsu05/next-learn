import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export const metadata: Metadata = {
    title: "",
    description: "Furniture DesignのTOPページ",
};
export default function Page() {
    const furnitureImages = [
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
        {
            image: "/challenge/furniture/products.png",
            title: "プロダクトタイトル",
            price: "¥99,999 +tax",
        },
    ];
    return (
        <div className={styles.productsContainer}>
            <div>
                <p className={styles.p}>Products</p>
                <div className={styles.products}>
                    {furnitureImages.map((item, i) => (
                        <div key={i} className={styles.item}>
                            <Link href="/challenge/furniture/products/detail">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={300}
                                    height={300}
                                />
                            </Link>
                            <p className={styles.text}>{item.title}</p>
                            <p className={styles.text}>{item.price}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.pagination}>
                    <p className={styles.pageLink}>
                        <Link href="#" className={styles.link}>
                            1
                        </Link>
                    </p>

                    <p className={styles.pageLink}>
                        <Link href="#" className={styles.link}>
                            2
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
