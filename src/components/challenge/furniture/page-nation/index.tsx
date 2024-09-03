import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { getProductsList } from "@/fetch/challenge/furniture/get-products-list";

type PageNationProps = {
    children?: React.ReactNode;
};

export const PageNation: React.FC<PageNationProps> = async () => {
    const page = await getProductsList();
    let i = 1;
    return (
        <div className={styles.pagination}>
            {[...Array(page.totalPages)].map(() => (
                <p className={styles.pageLink} key={page.items.id}>
                    <Link
                        key={page.items.id}
                        href={`/challenge/furniture/products/${page.currentPage++}`}
                        className={styles.link}
                    >
                        {i++}
                    </Link>
                </p>
            ))}
        </div>
    );
};
