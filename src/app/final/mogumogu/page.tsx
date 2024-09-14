import type { Metadata } from "next";
import Image from "next/image";
import {
    MainImage,
    Wrapper,
    Section,
    SectionTitle,
    Item,
    LinkText,
    AboutText,
    PageButton,
    Text,
} from "@/components/final";
import { DonutsTop } from "@/features/final/mogumogu/donuts-top-fetch";
import { FoodsTop } from "@/features/final/mogumogu/foods-top-fetch ";
import { DrinkTop } from "@/features/final/mogumogu/drink-top-fetch ";

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
                <AboutText />

                <SectionTitle>menu</SectionTitle>
                <Section style={"menu"}>
                    <DonutsTop />
                    <FoodsTop />
                    <DrinkTop />
                </Section>

                <PageButton>
                    <LinkText href={"/final/mogumogu/menu/"}>
                        View more
                    </LinkText>
                </PageButton>

                <LinkText href={"/final/mogumogu/contact"}>
                    <Text>
                        お問い合わせはこちらから
                        <Image
                            src={"/final/mogumogu/mail_icon.png"}
                            width={30}
                            height={30}
                            alt=""
                        />
                    </Text>
                </LinkText>
            </Wrapper>
        </>
    );
}
