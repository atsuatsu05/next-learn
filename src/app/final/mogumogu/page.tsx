import type { Metadata } from "next";
import {
    MainImage,
    Wrapper,
    Section,
    SectionTitle,
    LinkText,
    AboutText,
    PageButton,
} from "@/components/final";
import { DonutsTop } from "@/features/final/mogumogu/donuts-top-fetch";
import { FoodsTop } from "@/features/final/mogumogu/foods-top-fetch";
import { DrinkTop } from "@/features/final/mogumogu/drink-top-fetch";

export const metadata: Metadata = {
    title: "Top | cafe mogumogu",
    description: "cafe mogumoguのTopページ",
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
            </Wrapper>
        </>
    );
}
