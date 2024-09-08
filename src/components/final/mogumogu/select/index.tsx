"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";

export const Select: React.FC = ({ ...props }) => {
    const [select, setSelect] = useState("");
    const options = ["袋あり", "袋なし"];
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value);
    };

    return (
        <>
            <select
                value={select}
                onChange={handleChange}
                className={styles.select}
            >
                {options.map((item) => (
                    <option key={item} value={item} {...props}>
                        {item}
                    </option>
                ))}
            </select>
        </>
    );
};
