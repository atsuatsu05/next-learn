import React from "react";
import { client } from "@/libs/final/mogumogu/client";
import { Item } from "@/components/final";

export const DonutsTop: React.FC = async () => {
    const data = await client.get({
        endpoint: "donuts",
    });
    console.log(data.contents[0].image);

    return (
        <Item
            itemTitle="donuts"
            image={data.contents[3].image.url}
            href="/final/mogumogu/menu/#donuts"
        ></Item>
    );
};
