import React from "react";
import { Item } from "@/components/challenge";
import { getTopProducts } from "@/fetch/challenge/furniture/get-top-products";

type Item = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
};

export const ProductsFetch: React.FC = async () => {
    const contents = await getTopProducts();
    console.log(contents.items[0].title);
    return (
        <>
            {contents.items.map((item: Item) => (
                <Item
                    key={item.id}
                    itemTitle={item.title}
                    price={`¥${item.price.toLocaleString()} +tax`}
                    image={item.imageUrl}
                    href={`/challenge/furniture/products/detail/${item.id}`}
                />
            ))}
        </>
    );
};
