import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

type MenuItemProps = {
    children?: React.ReactNode;
    image?: string;
    href: string;
    alt: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({
    children,
    image,
    href,
    alt,
}) => {
    return (
        <div className={styles.item}>
            <Link href={href} className={styles.link}>
                <div className={styles.title}>
                    <h2 className={styles.h1}>{children}</h2>
                    <div className={styles.arrow}>
                        <p className={styles.p}>→</p>
                    </div>
                </div>
            </Link>
            <Link href={href} className={styles.link}>
                <Image src={`${image}`} width={250} height={200} alt={alt} />
            </Link>
        </div>
    );
};
