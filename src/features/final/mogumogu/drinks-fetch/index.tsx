import React from "react";
import {
    Container,
    DetailImage,
    DetailText,
    LinkBox,
} from "@/components/final";
import { getDrinkMenu } from "@/fetch/final/get-drink-menu ";

type Item = {
    id: string;
    title: string;
    image: {
        url: string;
    };
    price: string | number;
    quantity: string | number;
};

export const Drink: React.FC = async () => {
    const data = await getDrinkMenu();
    console.log(data.contents[0]);

    return (
        <>
            {data.contents.map((item: Item) => (
                <Container style="item" key={item.id}>
                    <LinkBox
                        href={`/final/mogumogu/menu/detail/drink/${item.id}`}
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
