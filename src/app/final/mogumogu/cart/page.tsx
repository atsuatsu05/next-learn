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
import { CartItems } from "@/features/final/mogumogu/cart-items";

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
                <LinkText href="/final/mogumogu">
                    <PageButton>注文内容を確定する</PageButton>
                </LinkText>
            </Wrapper>
        </>
    );
}
