import React from "react";
import styles from "./styles.module.scss";
import { HeaderIcon } from "@/components/final";
import { CartCount } from "../cart-count";

export const HeaderCartCount: React.FC = () => {
    return (
        <>
            <div className={styles.headerIcon}>
                <HeaderIcon
                    src={"/final/mogumogu/cart_icon.png"}
                    alt="カート"
                    href={"/final/mogumogu/cart"}
                >
                    <CartCount />
                </HeaderIcon>
            </div>
        </>
    );
};
