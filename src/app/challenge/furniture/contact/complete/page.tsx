import type { Metadata } from "next";
import { PageTitle, Wrapper, Text, LinkText } from "@/components/challenge";

export const metadata: Metadata = {
    title: "Contact-Complete",
    description: "Furniture DesignのContact送信完了ページ",
};

export default function Page() {
    return (
        <>
            <PageTitle>Contact</PageTitle>
            <Wrapper style="contact">
                <Text>お問い合わせありがとうございました。</Text>
            </Wrapper>
            <LinkText href="/challenge/furniture">Back to Home</LinkText>
        </>
    );
}
