"use client";
import React, { useState } from "react";

export const TextfieldExample: React.FC = () => {
    const [val, setVal] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
    };
    return (
        <>
            <input onChange={handleChange} type="text" />
            <br />
            <p>入力値：{val}</p>
        </>
    );
};
