import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

type ItemProps = {
    itemTitle: string;
    price: string;
    link?: string;
    image?: string;
    href: string;
};

export const Item: React.FC<ItemProps> = ({
    itemTitle,
    price,
    image,
    href,
}) => {
    return (
        <div className={styles.products}>
            <div className={styles.item}>
                <Link href={href}>
                    <Image src={`${image}`} width={300} height={300} alt="" />
                </Link>
                <p className={styles["pd-title"]}>{itemTitle}</p>
                <p className={styles["pd-title"]}>{price}</p>
            </div>
        </div>
    );
};
