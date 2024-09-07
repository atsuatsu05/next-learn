import type { Metadata } from "next";
import Image from "next/image";
import {
    MainImage,
    Wrapper,
    Section,
    SectionTitle,
    Item,
    LinkText,
    Text,
    PageButton,
} from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "cafe mogumoguのTOPページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"top"}>
                <MainImage src={"/final/mogumogu/main_visual.jpg"} />
                <SectionTitle>cafe mogumogu</SectionTitle>
                <Text>素朴なお菓子と美味しい空気があるお店 mogumogu</Text>
                <Text>
                    木々の緑と、自然の音に身をゆだねて、ぼーっとする時間をご提供します。
                    <br />
                    そんな時間のおともに、ドーナツやドリンクをどうぞ。
                    <br />
                    どんなときも、もぐもぐすれば、お腹もこころもホッと一息つけるはず。
                </Text>
                <Text>どうぞごゆるりとお過ごしください。</Text>

                <SectionTitle>menu</SectionTitle>
                {/* apiからmapで取り出したい */}
                <Section style={"menu"}>
                    <Item
                        href={"/final/mogumogu/menu/"}
                        image={"/final/mogumogu/menu/d_choco.png"}
                        itemTitle={"donuts"}
                    />
                    <Item
                        href={"/final/mogumogu/"}
                        image={"/final/mogumogu/menu/food_pancake.png"}
                        itemTitle={"foods"}
                    />
                    <Item
                        href={"/final/mogumogu/"}
                        image={"/final/mogumogu/menu/dr_coffee.png"}
                        itemTitle={"drink"}
                    />
                </Section>

                <LinkText href={"/final/mogumogu/menu/"}>
                    <PageButton>View more</PageButton>
                </LinkText>

                <LinkText href={"/final/mogumogu/contact"}>
                    お問い合わせはこちらから
                    <Image
                        src={"/final/mogumogu/mail_icon.png"}
                        width={30}
                        height={30}
                        alt=""
                    />
                </LinkText>
            </Wrapper>
        </>
    );
}
