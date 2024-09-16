import type { Metadata } from "next";
import {
    Wrapper,
    SectionTitle,
    PageButton,
    LinkText,
} from "@/components/final";
import { CartItems } from "@/features/final/mogumogu/cart-item";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "カートの中身",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"cart"}>
                <SectionTitle>Cart</SectionTitle>
                <CartItems />
                <PageButton>
                    <LinkText href="/final/mogumogu">
                        注文内容を確定する
                    </LinkText>
                </PageButton>
            </Wrapper>
        </>
    );
}
