import type { Metadata } from "next";
import {
    Title,
    Item,
    Text,
    Wrapper,
    MainImage,
    LinkText,
} from "@/components/challenge";

export const metadata: Metadata = {
    title: "Top",
    description: "Furniture DesignのTOPページ",
};

export default function Page() {
    return (
        <Wrapper style="top">
            <MainImage src="/challenge/furniture/main.png" />
            <Title>About</Title>
            <Text>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
            </Text>

            <Title>Products</Title>
            <Wrapper style="topProducts">
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

            <LinkText href="/challenge/furniture/products/1">
                View More
            </LinkText>
        </Wrapper>
    );
}
