import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.scss";

export const metadata: Metadata = {
    title: "Products",
    description: "Furniture DesignのPRODUCTSページ",
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
        <div>
            <div>
                <p>Products</p>
                <div>
                    {furnitureImages.map((item, i) => (
                        <div key={i}>
                            <Link href="/challenge/furniture/products/detail">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={300}
                                    height={300}
                                />
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link href="#">
                    <p>1</p>
                </Link>
                <Link href="#">
                    <p>2</p>
                </Link>
            </div>
        </div>
    );
}
