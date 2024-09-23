import type { Metadata } from "next";
import { PageTitle, Wrapper } from "@/components/final";
import { getDrinkFetch } from "@/fetch/final/get-drink-detail";
import { AddToCart } from "@/features/final/mogumogu/detail/add-to-cart";

export const metadata: Metadata = {
    title: "Drink | cafe mogumogu",
    description: "cafemogumoguのDetailページ",
};

type PageProps = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: PageProps) {
    const item = await getDrinkFetch(params.id);

    return (
        <>
            <Wrapper style="detail">
                <PageTitle>{item.title}</PageTitle>
                <AddToCart
                    key={item.id}
                    title={item.title}
                    image={item.image.url}
                    price={item.price}
                    product={item}
                />
            </Wrapper>
        </>
    );
}
