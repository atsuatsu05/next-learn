import type { Metadata } from "next";
import {
    Wrapper,
    PageTitle,
    SectionTitle,
    PageButton,
    LinkText,
    MenuItemBox,
    CartItemTitle,
    DetailImage,
} from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "カートの中身",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"cart"}>
                <SectionTitle>Cart</SectionTitle>
                <CartItemTitle />
                <DetailImage
                    src="/final/mogumogu/menu/d_choco.png"
                    alt="チョコレートドーナツ"
                >
                    チョコレートドーナツ
                </DetailImage>
                <LinkText href="/final/mogumogu">
                    <PageButton>注文内容を送信する</PageButton>
                </LinkText>
            </Wrapper>
        </>
    );
}
