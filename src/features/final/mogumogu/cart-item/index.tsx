"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.scss";
import {
    Counter,
    PageButton,
    LinkText,
    DeleteButton,
    TextButton,
} from "@/components/final";

interface CartItem {
    id: string;
    title: string;
    image: {
        url: string;
    };
    price: number;
    quantity: number;
}

export const CartItems: React.FC = () => {
    //カートに追加した商品情報を取得する
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const router = useRouter();

    //ローカルストレージからカートの情報を取得
    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(savedCartItems);

        //合計金額の算出
        const total = savedCartItems.reduce(
            (sum: number, item: CartItem) => sum + item.price * item.quantity,
            0,
        );
        setTotalPrice(total);
    }, []);

    //数量が変わったら、それぞれ値を更新する
    const handleQuantityChange = (id: string, newQuantity: number) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item,
        );
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));

        //数量の変更に合わせて合計金額の再計算
        const total = updatedCartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );
        setTotalPrice(total);
        //カート更新のカスタムイベントを発火させ、カートアイコンにアイテムのアイテム数を更新させる
        const event = new CustomEvent("cartUpdated");
        window.dispatchEvent(event);
    };

    //商品ごとのカートからの削除処理
    const handleRemoveItem = (id: string) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id); //選択したid以外のもので新たに配列を作る
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        //カート更新のカスタムイベントを発火させ、カートアイコンにアイテムのアイテム数を更新させる
        const event = new CustomEvent("cartUpdated");
        window.dispatchEvent(event);
    };

    //カートを空にする処理
    const handleClearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cart");
        setTotalPrice(0);
        //カート更新のカスタムイベントを発火させ、カートアイコンにアイテムのアイテム数を更新させる
        const event = new CustomEvent("cartUpdated");
        window.dispatchEvent(event);
    };

    //注文を確定した時の処理
    const handleConfirmOrder = () => {
        console.log("注文内容", cartItems);
        router.push("/final/mogumogu/cart/complete");
        handleClearCart();
        //カート更新のカスタムイベントを発火させ、カートアイコンにアイテムのアイテム数を更新させる
        const event = new CustomEvent("cartUpdated");
        window.dispatchEvent(event);
    };

    return (
        <>
            {cartItems.length > 0 ? (
                <>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>商品</th>
                                <th>数量</th>
                                <th>金額</th>
                            </tr>
                        </thead>
                        {/*カートに追加されていたら表示させる */}

                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <th className={styles.product} scope="row">
                                        <Image
                                            src={item.image.url}
                                            width={125}
                                            height={100}
                                            alt={item.title}
                                            className={styles.image}
                                        />
                                        {item.title}
                                    </th>
                                    <td>
                                        <Counter
                                            initialQuantity={item.quantity}
                                            onQuantityChange={(newQuantity) =>
                                                handleQuantityChange(
                                                    item.id,
                                                    newQuantity,
                                                )
                                            }
                                        />
                                        <DeleteButton
                                            onDelete={() =>
                                                handleRemoveItem(item.id)
                                            }
                                        >
                                            削除
                                        </DeleteButton>
                                    </td>
                                    <td>{`¥${(item.price * item.quantity).toLocaleString()}（税込）`}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className={styles.tfoot}>
                            <tr>
                                <th
                                    scope="row"
                                    colSpan={2}
                                    className={styles.total}
                                >
                                    合計
                                </th>

                                <td className={styles.totalPrice}>
                                    {`¥ ${totalPrice.toLocaleString()}（税込）`}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <PageButton onConfirmOrder={handleConfirmOrder}>
                        <LinkText href="/final/mogumogu/cart/complete">
                            注文を確定する
                        </LinkText>
                    </PageButton>
                    <DeleteButton onDelete={handleClearCart}>
                        カートを空にする
                    </DeleteButton>
                    <TextButton>
                        <LinkText href="/final/mogumogu/menu">
                            買い物を続ける
                        </LinkText>
                    </TextButton>
                </>
            ) : (
                <>
                    <p className={styles.text}>カートに商品がありません</p>
                    <LinkText href="/final/mogumogu/menu">
                        商品一覧ページへ
                    </LinkText>
                </>
            )}
        </>
    );
};
