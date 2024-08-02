import React from "react";
import styles from "./index.module.scss";

type ItemProps = {
    children: React.ReactNode;
};

export const Item: React.FC<ItemProps> = ({ children }) => {
    return (
        <div className={styles.products}>
            <div className={styles["products-div"]}>{children}</div>
        </div>
    );
};
