import type { Metadata } from "next";
import {
    Title,
    Text,
    Wrapper,
    MainImage,
    LinkText,
} from "@/components/challenge";
import { ProductsFetch } from "@/features/challenge/furniture/top/products-fetch";

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
                <ProductsFetch />
            </Wrapper>

            <LinkText href="/challenge/furniture/products/1">
                View More
            </LinkText>
        </Wrapper>
    );
}
