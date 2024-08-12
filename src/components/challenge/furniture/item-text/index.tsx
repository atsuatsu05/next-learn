import React from "react";
import styles from "./index.module.scss";

type ItemTextProps = {
    children?: React.ReactNode;
    size?: string;
    color?: string;
    material?: string;
};

export const ItemText: React.FC<ItemTextProps> = ({
    children,
    size,
    color,
    material,
}) => {
    return (
        <div className={styles.right}>
            <p>{children}</p>
            <p>{children}</p>
            <p className={styles.price}>¥99,999 +tax</p>
            <dl className={styles.dl}>
                <dt className={styles.dt}>SIZE:</dt>
                <dd>{size}</dd>
            </dl>
            <dl className={styles.dl}>
                <dt className={styles.dt}>COLOR:</dt>
                <dd>{color}</dd>
            </dl>
            <dl className={styles.dl}>
                <dt className={styles.dt}>MATERIA:</dt>
                <dd>{material}</dd>
            </dl>
        </div>
    );
};
