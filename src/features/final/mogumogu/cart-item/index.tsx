"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Counter } from "@/components/final";

export const CartItems: React.FC = () => {
    const price = 400;
    const total = price + price;
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>商品</th>
                    <th>数量</th>
                    <th>金額</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className={styles.product} scope="row">
                        <Image
                            src="/final/mogumogu/menu/d_choco.png"
                            width={125}
                            height={100}
                            alt="チョコレートドーナツ"
                        />
                        チョコレートドーナツ
                    </th>
                    <td>
                        <Counter />
                    </td>
                    <td>¥{price}</td>
                </tr>
            </tbody>
            <tfoot className={styles.tfoot}>
                <tr>
                    <th scope="row" colSpan={2} className={styles.total}>
                        合計
                    </th>
                    <td>{total}</td>
                </tr>
            </tfoot>
        </table>
    );
};
