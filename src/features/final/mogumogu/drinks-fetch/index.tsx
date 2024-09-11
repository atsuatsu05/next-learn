import React from "react";
import { client } from "@/libs/final/mogumogu/client";
import { Container, DetailImage, DetailText } from "@/components/final";

type DrinkProps = {};

type Item = {
    id: string;
    title: string;
    image: {
        url: string;
    };
    price: number;
};

export const Drink: React.FC<DrinkProps> = async () => {
    const data = await client.get({
        endpoint: "drink",
    });
    console.log(data.contents[0].image);

    return (
        <>
            {data.contents.map((item: Item) => (
                <Container style={"item"} key={item.id}>
                    <DetailImage src={item.image.url} alt={item.title} />
                    <DetailText
                        name={item.title}
                        price={`¥${item.price}（税込）`}
                    />
                </Container>
            ))}
        </>
    );
};
