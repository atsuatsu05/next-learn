import type { Metadata } from "next";
import Image from "next/image";
import styles from "./style.module.scss";
import { ItemText } from "@/components/challenge";
import { UseRouter } from "@/features/challenge/furniture/products/detail/use-router";

export const metadata: Metadata = {
    title: "Detail",
    description: "Furniture DesignのDetailページ",
};

export default function Page() {
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
                    <ItemText
                        size="W999 × D999 × H999"
                        color="テキスト"
                        material="テキストテキストテキスト"
                    >
                        コンテンツ
                    </ItemText>

                    <div className={styles.back}>
                        <UseRouter></UseRouter>
                    </div>
                </div>
            </div>
        </div>
    );
}
