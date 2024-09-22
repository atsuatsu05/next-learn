"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

type HeaderIconProps = {
    children?: React.ReactNode;
    src: string;
    alt: string;
    href: string;
};

export const HeaderIcon: React.FC<HeaderIconProps> = ({
    children,
    src,
    alt,
    href,
}) => {
    return (
        <div>
            <Link href={href} className={styles.link}>
                <Image
                    src={src}
                    width={20}
                    height={20}
                    alt={alt}
                    className={styles.icon}
                />
                {children}
            </Link>
        </div>
    );
};
