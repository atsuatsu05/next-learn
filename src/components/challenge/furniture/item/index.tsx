import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

type ItemProps = {
    itemTitle: string;
    price: string;
};

export const Item: React.FC<ItemProps> = ({ itemTitle, price }) => {
    return (
        <div className={styles.products}>
            <div className={styles.item}>
                <Link href="/challenge/furniture/products/detail/1">
                    <Image
                        src="/challenge/furniture/products.png"
                        width={300}
                        height={300}
                        alt=""
                    />
                </Link>
                <p className={styles["pd-title"]}>{itemTitle}</p>
                <p className={styles["pd-title"]}>{price}</p>
            </div>
        </div>
    );
};
