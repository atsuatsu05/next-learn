import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
import styles from "./style.module.scss";

export const metadata: Metadata = {
    title: "About",
    description: "Furniture DesignのABOUTページ",
};
export default function Page() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>About</p>
            <p className={styles.p}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
        </div>
    );
}
