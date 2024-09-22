import type { Metadata } from "next";
import { SectionTitle, Wrapper, Text, LinkText } from "@/components/final/";

export const metadata: Metadata = {
    title: "お問い合わせを受け付けました",
    description: "cafe mogumoguのお問い合わせ完了ページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"complete"}>
                <SectionTitle>Contact</SectionTitle>
                <Text style="complete">お問い合わせありがとうございます。</Text>
                <LinkText href="/final/mogumogu/">Back to Home</LinkText>
            </Wrapper>
        </>
    );
}
