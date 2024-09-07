import React from "react"; //nodeモジュールから読んできている
import styles from "./index.module.scss";

type DefinitionListProps = {
    children: React.ReactNode;
};
export const DefinitionList: React.FC<DefinitionListProps> = ({ children }) => {
    return <dl className={styles.dl}>{children}</dl>;
};

type DefinitionItemProps = {
    dt?: string;
    children: React.ReactNode;
};
export const DefinitionItem: React.FC<DefinitionItemProps> = ({
    dt,
    children,
}) => {
    return (
        <>
            <dt className={styles.dt}>{dt}</dt>
            <dd className={styles.dd}>{children}</dd>
        </>
    );
};
