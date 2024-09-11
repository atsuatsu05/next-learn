import React from "react";
import { client } from "@/libs/final/mogumogu/client";
import { Item } from "@/components/final";

type DrinkTopProps = {};

export const DrinkTop: React.FC<DrinkTopProps> = async () => {
    const data = await client.get({
        endpoint: "drink",
    });
    console.log(data.contents[0].image);

    return (
        <Item
            itemTitle="drink"
            image={data.contents[1].image.url}
            href="/final/mogumogu/menu"
        ></Item>
    );
};