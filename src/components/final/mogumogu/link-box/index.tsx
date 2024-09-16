import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

type LinkBoxProps = {
    children?: React.ReactNode;
    href: string;
};

export const LinkBox: React.FC<LinkBoxProps> = ({ children, href }) => {
    return (
        <Link href={href} className={styles.link}>
            {children}
        </Link>
    );
};
