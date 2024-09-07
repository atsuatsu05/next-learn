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

export const Item: React.FC<ItemProps> = ({ itemTitle, image, href }) => {
    return (
        <div className={styles.menu}>
            <div className={styles.item}>
                <Link href={href} className={styles.link}>
                    <Image src={`${image}`} width={250} height={200} alt="" />
                    <p className={styles.title}>{itemTitle}</p>
                </Link>
            </div>
        </div>
    );
};
