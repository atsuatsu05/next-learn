import React from "react"; //nodeモジュールから読んできている

type TextProps = {
    children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ children }) => {
    return <p>{children}</p>;
};
