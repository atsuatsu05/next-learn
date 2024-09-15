import React from "react";
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
    price: string | number;
};

export const Donuts: React.FC<DonutsProps> = async () => {
    const data = await client.get({
        endpoint: "donuts",
    });
    //ローカルストレージへの保存
    // const CartAdd = localStorage.getItem("product");
    // const ProductCartAdd = localStorage.setItem(
    //     "product",
    //     JSON.stringify(data.item),
    // );

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
                    <CartButton value={JSON.stringify(item)}>
                        カートに追加
                    </CartButton>
                </Container>
            ))}
        </>
    );
};
