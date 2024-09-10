import React from "react";
import { client } from "@/libs/final/mogumogu/client";
import { Container, DetailImage, DetailText } from "@/components/final";

type DonutsProps = {};

export const Donuts: React.FC<DonutsProps> = async () => {
    const data = await client.get({
        endpoint: "donuts",
    });
    console.log(data);

    return (
        <Container style={"item"}>
            <DetailImage src={data.image} alt={data.title} />
            <DetailText name={data.title} price={`¥${data.price}（税込）`} />
        </Container>
    );
};
