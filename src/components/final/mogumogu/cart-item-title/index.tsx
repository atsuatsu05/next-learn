import React from "react";
import styles from "./index.module.scss";

type CartItemTitleProps = {
    children?: React.ReactNode;
};

export const CartItemTitle: React.FC<CartItemTitleProps> = () => {
    return (
        <div className={styles.cartTitle}>
            <p>商品</p>
            <p>数量</p>
            <p>金額</p>
        </div>
    );
};
