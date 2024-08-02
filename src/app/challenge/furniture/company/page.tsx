import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
    title: "Company",
    description: "Furniture DesignのCompanyページ",
};

export default function Page() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Company</p>
            <table className={styles.table}>
                <tbody className={styles.tbody}>
                    <tr className={styles.tr}>
                        <th className={styles.th}>社名</th>
                        <td>株式会社ファニチャーデザイン</td>
                    </tr>
                    <tr>
                        <th className={styles.th}>住所</th>
                        <td>〒107-0062 東京都港区南青山１丁目××××××</td>
                    </tr>
                    <tr>
                        <th className={styles.th}>設立</th>
                        <td>XXXX年XX月</td>
                    </tr>
                    <tr>
                        <th className={styles.th}>資本金</th>
                        <td>XXXX万円</td>
                    </tr>
                    <tr>
                        <th className={styles.th}>従業員数</th>
                        <td>XX名</td>
                    </tr>
                    <tr>
                        <th className={styles.th}>事業内容</th>
                        <td>
                            家具、インテリアの企画・生産
                            <br />
                            家具、インテリアの販売
                            <br />
                            店舗の企画・デザイン・設計
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <Image
                    src="/challenge/furniture/map.png"
                    className={styles.image}
                    alt="map"
                    width={600}
                    height={300}
                />
            </div>
        </div>
    );
}
