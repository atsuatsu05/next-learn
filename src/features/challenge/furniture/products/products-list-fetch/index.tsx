import React from "react";
import { Item } from "@/components/challenge";
import { getProductsList } from "@/fetch/challenge/furniture/get-products-list";

type Item = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    href: string;
};

type ProductsListFetchProps = {
    list: number;
};

export const ProductsListFetch: React.FC<ProductsListFetchProps> = async ({
    list,
}) => {
    const contents = await getProductsList(list);
    // console.log(list);
    return (
        <>
            {contents.items.map((item: Item) => (
                <Item
                    key={item.id}
                    itemTitle={item.title}
                    price={"¥" + `${item.price.toLocaleString()}` + " +tax"}
                    image={item.imageUrl}
                    href={`/challenge/furniture/products/detail/${item.id}`}
                />
            ))}
        </>
    );
};
