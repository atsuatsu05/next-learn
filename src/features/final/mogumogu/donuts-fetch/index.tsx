"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/libs/final/mogumogu/client";
import {
    Container,
    DetailImage,
    DetailText,
    CartButton,
    Counter,
} from "@/components/final";

type DonutsProps = {};

type Item = {
    id: string;
    title: string;
    image: {
        url: string;
    };
    price: number;
};

export const Donuts: React.FC<DonutsProps> = async () => {
    const data = await client.get({
        endpoint: "donuts",
    });
    console.log(data.contents[0].image);
    //ローカルストレージへの保存
    const [Value, setValue] = useState<string>("");
    useEffect(() => {
        const _Value = localStorage.getItem("Value");
        if (_Value) {
            setValue(_Value);
        }
    }, [Value]);

    return (
        <>
            {data.contents.map((item: Item) => (
                <Container style={"item"} key={item.id}>
                    <DetailImage src={item.image.url} alt={item.title} />
                    <DetailText
                        name={item.title}
                        price={`¥${item.price}（税込）`}
                    />
                    <Counter />
                    <CartButton>カートに追加</CartButton>
                </Container>
            ))}
        </>
    );
};
