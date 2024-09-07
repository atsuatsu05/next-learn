import React from "react";
import styles from "./index.module.scss";

type FooterProps = {
    copyright: string;
};

export const Footer: React.FC<FooterProps> = ({ copyright }) => {
    return (
        <div className={styles.footer}>
            <p className={styles.copyRight}>{copyright}</p>
        </div>
    );
};
