import type { Metadata } from "next";
import { SectionTitle, Wrapper, Text, LinkText } from "@/components/final/";

export const metadata: Metadata = {
    title: "ご注文を受け付けました",
    description: "cafe mogumoguのご注文受付完了ページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"cart"}>
                <SectionTitle>Cart</SectionTitle>
                <Text>ご注文ありがとうございました。</Text>
                <LinkText href="/final/mogumogu/">Back to Home</LinkText>
            </Wrapper>
        </>
    );
}
