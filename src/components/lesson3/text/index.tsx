import React from "react"; //nodeモジュールから読んできている

type TextProps = {
    align?: "right" | "center" | "left";
    children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ children }) => {
    return <p>{children}</p>;
};
