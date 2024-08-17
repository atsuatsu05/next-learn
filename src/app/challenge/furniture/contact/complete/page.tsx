import type { Metadata } from "next";
import Link from "next/link";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
    title: "Contact-Complete",
    description: "Furniture DesignのContact送信完了ページ",
};

export default function Page() {
    return (
        <>
            <p className={styles.title}>Contact</p>
            <p>お問い合わせありがとうございました。</p>
            <Link href="/challenge/furniture">Back to Home</Link>
        </>
    );
}
