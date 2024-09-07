import type { Metadata } from "next";
import {
    Wrapper,
    Container,
    SectionTitle,
    ContactInput,
    PageButton,
} from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "カートの中身",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"mypage"}>
                <SectionTitle>ログイン</SectionTitle>
                <Container style={"mypage"}>
                    <ContactInput label="メールアドレス" type="email" />
                    <ContactInput label="パスワード" type="password" />
                </Container>
                <PageButton>ログイン</PageButton>
            </Wrapper>
        </>
    );
}
