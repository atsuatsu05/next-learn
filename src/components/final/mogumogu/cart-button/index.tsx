"use client";
import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

//オブジェクトの型定義
interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
}
interface CartButtonProps {
    children?: React.ReactNode;
    product: Product;
    quantity: number;
}

export const CartButton: React.FC<CartButtonProps> = ({
    children,
    product,
    quantity,
}) => {
    const handleAddToCart = () => {
        try {
            const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
            //商品情報と数量を合わせたオブジェクトを作成
            const productWithQuantity = { ...product, quantity };
            //カートに商品を追加
            const updatedCartItems = [...cartItems, productWithQuantity];
            //ローカルストレージに更新後のカートを保存
            localStorage.setItem("cart", JSON.stringify(updatedCartItems));
            alert("カートに追加しました");
            //カート更新のカスタムイベントを発火させ、カートアイコンのアイテム数を更新
            const event = new CustomEvent("cartUpdated");
            window.dispatchEvent(event);
        } catch (error) {
            console.error("カートへの追加中にエラーが発生しました：", error);
        }
    };

    return (
        <>
            <button className={styles.button} onClick={handleAddToCart}>
                <p className={styles.text}>{children}</p>
            </button>
        </>
    );
};
