"use client";
import React, { useState } from "react";

export const FilterExample: React.FC = () => {
    const list = ["おはよう", "こんにちは", "こんばんは"];
    const [filterVal, setFilterVal] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterVal(e.target.value);
    };
    return (
        <>
            <input type="text" onChange={handleChange} />
            <ul>
                {list
                    .filter((item) => item.match(filterVal)) //match：filterの部分で要素が一つ一つ返ってくる。
                    .map((item) => (
                        <li key={item}>{item}</li>
                    ))}
            </ul>
        </>
    );
};
