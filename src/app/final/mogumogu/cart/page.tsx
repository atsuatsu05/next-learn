import type { Metadata } from "next";
import { Wrapper, PageTitle, SectionTitle } from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "カートの中身",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"cart"}>
                <SectionTitle>Cart</SectionTitle>
            </Wrapper>
        </>
    );
}
