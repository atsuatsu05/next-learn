import React from "react";
import styles from "./index.module.scss";

interface DeleteButtonProps {
    children: React.ReactNode;
    onDelete: () => void; //削除するための関数をプロパティで受け取る
}
export const DeleteButton: React.FC<DeleteButtonProps> = ({
    children,
    onDelete,
}) => {
    return (
        <div className={styles.div}>
            <button onClick={onDelete} className={styles.text}>
                {children}
            </button>
        </div>
    );
};
