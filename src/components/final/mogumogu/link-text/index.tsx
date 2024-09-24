"use client";
import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

type LinkTextProps = {
    children?: React.ReactNode;
    href: string;
};

export const LinkText: React.FC<LinkTextProps> = ({ children, href }) => {
    return (
        <div className={styles.div}>
            <Link href={href} className={styles.link}>
                {children}
            </Link>
        </div>
    );
};
