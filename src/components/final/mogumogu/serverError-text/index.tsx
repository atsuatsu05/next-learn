import React from "react";
import styles from "./index.module.scss";

type ServerErrorTextProps = {
    children: React.ReactNode;
};

export const ServerErrorText: React.FC<ServerErrorTextProps> = ({
    children,
}) => {
    return (
        <div className={styles.error}>
            <p className={styles.p}>{children}</p>
        </div>
    );
};
