import React from "react";
import styles from "./index.module.scss";

type ArrowButtonProps = {
    children?: React.ReactNode;
};

export const ArrowButton: React.FC<ArrowButtonProps> = () => {
    return (
        <div className={styles.arrow}>
            <p className={styles.p}>→</p>
        </div>
    );
};
