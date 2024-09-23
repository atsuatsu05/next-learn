import type { Metadata } from "next";
import { Wrapper, SectionTitle } from "@/components/final";
import { CartItems } from "@/features/final/mogumogu/cart-item";

export const metadata: Metadata = {
    title: "Cart | cafe mogumogu",
    description: "カートの中身",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"cart"}>
                <SectionTitle>Cart</SectionTitle>
                <CartItems />
            </Wrapper>
        </>
    );
}
