import type { Metadata } from "next";
import { PageNation, PageTitle, Wrapper } from "@/components/challenge";
import { ProductsListFetch } from "@/features/challenge/furniture/products/products-list-fetch";

export const metadata: Metadata = {
    title: "",
    description: "Furniture DesignのTOPページ",
};

type PageProps = {
    params: {
        list: number;
    };
};
export default function Page({ params }: PageProps) {
    return (
        <>
            <PageTitle>Products</PageTitle>
            <Wrapper style="products">
                <ProductsListFetch list={params.list} />
            </Wrapper>
            <PageNation />
        </>
    );
}
