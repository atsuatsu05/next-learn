"use client";
import React, { useState } from "react";

export const SelectExample: React.FC = () => {
    const [select, setSelect] = useState("おはよう");
    const options = ["おはよう", "こんにちは", "こんばんは"];
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value);
    };

    return (
        <>
            <select value={select} onChange={handleChange}>
                {options.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            <p>選択：{select}</p>
        </>
    );
};
