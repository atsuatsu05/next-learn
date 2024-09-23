import type { Metadata } from "next";
import { PageTitle, Wrapper } from "@/components/final";
import { getFoodsFetch } from "@/fetch/final/get-foods-detail";
import { AddToCart } from "@/features/final/mogumogu/detail/add-to-cart";

export const metadata: Metadata = {
    title: "Foods | cafe mogumogu",
    description: "cafemogumoguのDetailページ",
};

type PageProps = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: PageProps) {
    const item = await getFoodsFetch(params.id);

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
