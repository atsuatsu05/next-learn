import type { Metadata } from "next";
import { Wrapper, PageTitle } from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "cafe mogumoguのTOPページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"menu"}>
                <PageTitle>Drink</PageTitle>
                <p>詳細ページ</p>
            </Wrapper>
        </>
    );
}
