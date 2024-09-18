import type { Metadata } from "next";
import { Wrapper, SectionTitle } from "@/components/final";
import { CartItems } from "@/features/final/mogumogu/cart-item";
import { UseRouter } from "@/features/final/mogumogu/detail/use-router";

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
                <UseRouter />
            </Wrapper>
        </>
    );
}
