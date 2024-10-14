import type { Metadata } from "next";
import { Wrapper, SectionTitle } from "@/components/final";

export const metadata: Metadata = {
    title: "お支払い方法の選択 | cafe mogumogu",
    description: "カートの中身",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"cart"}>
                <SectionTitle>お支払い方法</SectionTitle>
            </Wrapper>
        </>
    );
}
