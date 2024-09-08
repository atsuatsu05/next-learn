import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

type ItemProps = {
    itemTitle: string;
    price?: string;
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
        <div className={styles.menu}>
            <div className={styles.item}>
                <Link href={href} className={styles.link}>
                    <Image src={`${image}`} width={250} height={200} alt="" />
                    <div className={styles.text}>
                        <p>{itemTitle}</p>
                        <p className={styles.price}>{price}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};
