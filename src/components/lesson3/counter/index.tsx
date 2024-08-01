"use client";

import React, { useState } from "react"; //nodeモジュールから読んできている

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const handleClickCountUp = () => {
        setCount((count) => count + 1);
    };
    const handleClickCountDown = () => {
        setCount((count) => count - 1);
    };
    return (
        <>
            <button onClick={handleClickCountUp}>+</button>
            {count}
            <button onClick={handleClickCountDown}>-</button>
        </>
    );
};
