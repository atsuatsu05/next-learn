import type { Metadata } from "next";
import Image from "next/image";
import {
    ItemText,
    PageTitle,
    Wrapper,
    TextRight,
} from "@/components/challenge";
import { UseRouter } from "@/features/challenge/furniture/products/detail/use-router";

export const metadata: Metadata = {
    title: "Detail",
    description: "Furniture DesignのDetailページ",
};

export default function Page() {
    return (
        <>
            <PageTitle>ブログタイトル</PageTitle>
            <Wrapper style="detail">
                <Image
                    src="/challenge/furniture/detail.png"
                    width={400}
                    height={400}
                    alt="detail"
                />
                <TextRight>
                    <ItemText
                        size="W999 × D999 × H999"
                        color="テキスト"
                        material="テキストテキストテキスト"
                    >
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </ItemText>
                    <Wrapper style="back">
                        <UseRouter></UseRouter>
                    </Wrapper>
                </TextRight>
            </Wrapper>
        </>
    );
}
