import type { Metadata } from "next";
import { PageTitle, Text, Wrapper } from "@/components/challenge";

export const metadata: Metadata = {
    title: "About",
    description: "Furniture DesignのABOUTページ",
};
export default function Page() {
    return (
        <>
            <PageTitle>About</PageTitle>
            <Wrapper>
                <Text>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Text>
                <Text>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </Text>
            </Wrapper>
        </>
    );
}
