import type { Metadata } from "next";
import { Item, PageNation, PageTitle, Wrapper } from "@/components/challenge";

export const metadata: Metadata = {
    title: "",
    description: "Furniture DesignのTOPページ",
};

type PageProps = {
    params: {
        list: string;
    };
};
export default function Page({ params }: PageProps) {
    return (
        <>
            <PageTitle>Products</PageTitle>
            <Wrapper style="products">
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
                <Item
                    itemTitle="プロダクトタイトル"
                    price="¥99,999 +tax"
                ></Item>
            </Wrapper>
            <PageNation />
        </>
    );
}
