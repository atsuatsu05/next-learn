import React from "react";
import {
    Container,
    DetailImage,
    DetailText,
    LinkBox,
} from "@/components/final";
import { getDonutsMenu } from "@/fetch/final/get-donuts-menu";

type Item = {
    id: string;
    title: string;
    image: {
        url: string;
    };
    price: string | number;
    quantity: string | number;
};

export const Donuts: React.FC = async () => {
    const data = await getDonutsMenu();
    console.log(data.contents[0]);

    return (
        <>
            {data.contents.map((item: Item) => (
                <Container style="item" key={item.id}>
                    <LinkBox
                        href={`/final/mogumogu/menu/detail/donuts//${item.id}`}
                    >
                        <DetailImage src={item.image.url} alt={item.title} />
                        <DetailText
                            name={item.title}
                            price={`¥${item.price}（税込）`}
                        />
                    </LinkBox>
                </Container>
            ))}
        </>
    );
};
