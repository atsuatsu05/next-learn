import type { Metadata } from "next";
import Image from "next/image";
import { Wrapper, Text, PageTitle, Container } from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "cafe mogumoguのTOPページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"about"}>
                <PageTitle>About</PageTitle>
                <Container>
                    <Text>素朴なお菓子と美味しい空気があるお店 mogumogu</Text>
                    <Text>
                        木々の緑と、自然の音に身をゆだねて、ぼーっとする時間をご提供します。
                        <br />
                        そんな時間のおともに、ドーナツやドリンクをどうぞ。
                        <br />
                        どんなときも、もぐもぐすれば、お腹もこころもホッと一息つけるはず。
                    </Text>
                    <Text>どうぞごゆるりとお過ごしください。</Text>

                    <Image
                        src="/final/mogumogu/main_visual1.jpg"
                        width={500}
                        height={600}
                        alt=""
                    />
                </Container>
            </Wrapper>
        </>
    );
}
