import React from "react";
import styles from "./index.module.scss";
import { Counter } from "../counter";
import { CartButton } from "../cart-button";

type DetailTextProps = {
    name: string;
    price: string;
};
export const DetailText: React.FC<DetailTextProps> = ({ name, price }) => {
    return (
        <div>
            <h4>{name}</h4>
            <p className={styles.text}>{price}</p>
            <Counter />
            <CartButton>カートに追加</CartButton>
        </div>
    );
};
