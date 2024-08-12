import type { Metadata } from "next";
import Link from "next/link";
import styles from "./style.module.scss";
import { Item, PageNation } from "@/components/challenge";

export const metadata: Metadata = {
    title: "",
    description: "Furniture DesignのTOPページ",
};

type PageProps = {
    params: {
        list: string;
    };
};
export default function Page({ params }: PageProps) {
    return (
        <div className={styles.productsContainer}>
            <div>
                <p className={styles.p}>Products</p>
                <div className={styles.itemWrapper}>
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
                <PageNation />
            </div>
        </div>
    );
}
