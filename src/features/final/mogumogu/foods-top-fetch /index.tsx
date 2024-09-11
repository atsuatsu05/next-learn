import React from "react";
import { client } from "@/libs/final/mogumogu/client";
import { Item } from "@/components/final";

type FoodsTopProps = {};

export const FoodsTop: React.FC<FoodsTopProps> = async () => {
    const data = await client.get({
        endpoint: "foods",
    });
    console.log(data.contents[0].image);

    return (
        <Item
            itemTitle="foods"
            image={data.contents[2].image.url}
            href="/final/mogumogu/menu"
        ></Item>
    );
};
