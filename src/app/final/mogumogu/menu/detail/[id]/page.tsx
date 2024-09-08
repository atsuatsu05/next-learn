import type { Metadata } from "next";
import { Wrapper, DetailImage, DetailText } from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "cafe mogumoguのTOPページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"detail"}>
                <DetailImage
                    src="/final/mogumogu/menu/d_choco.png"
                    alt="チョコレートドーナツ"
                />
                <DetailText name="チョコレートドーナツ" price="¥400（税込）" />
            </Wrapper>
        </>
    );
}
