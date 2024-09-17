"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Counter } from "@/components/final";

type CartItem = {
    id: string;
    title: string;
    image: { url: string };

    price: number;
    quantity: number;
};

type CartQty = {
    quantity: string | number;
};

export const CartItems: React.FC = () => {
    //カートに追加した商品情報を取得する
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    //カートに追加した数量を取得する
    const [CartQty, setCartQty] = useState<CartQty[]>([]);
    //ローカルストレージからカートの情報を取得
    useEffect(() => {
        const StoredCartItems = JSON.parse(
            localStorage.getItem("product") || "[]",
        );
        setCartItems(StoredCartItems);
        console.log(cartItems);

        const CartAddQty = JSON.parse(localStorage.getItem("quantity") || "[]");
        setCartQty(CartAddQty);
    }, []);
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    );

    // const quantity = localStorage.getItem("quantity");
    // const total = Number(price) * Number(quantity);
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>商品</th>
                    <th>数量</th>
                    <th>金額</th>
                </tr>
            </thead>
            {/*カートに追加されていたら表示させる */}
            {cartItems.length === 0 ? (
                <p>カートに商品がありません。</p>
            ) : (
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <th className={styles.product} scope="row">
                                <Image
                                    src={item.image.url}
                                    width={125}
                                    height={100}
                                    alt="チョコレートドーナツ"
                                />
                                {item.title}
                            </th>
                            <td>
                                <Counter />
                            </td>
                            <td>{`¥${item.price}（税込）`}</td>
                        </tr>
                    ))}
                    {/* カートに追加されていなかったら表示させる */}
                </tbody>
            )}

            <tfoot className={styles.tfoot}>
                <tr>
                    <th scope="row" colSpan={2} className={styles.total}>
                        合計
                    </th>
                    <td>{`¥${totalPrice}（税込）`}</td>
                </tr>
            </tfoot>
        </table>
    );
};
