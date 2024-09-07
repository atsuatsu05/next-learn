import type { Metadata } from "next";
import { Wrapper, PageTitle, Item, Container } from "@/components/final";

export const metadata: Metadata = {
    title: "menu-donuts",
    description: "cafe mogumoguのドーナツ",
};

export default function Page() {
    const donutItems: { image: string; title: string; href: string } = {
        image: "/final/mogumogu/menu/d_sugar.png",
        href: "/final/mogumogu/menu/donuts",
        title: "シュガー",
    };

    return (
        <>
            <Wrapper style={"menu"}>
                <PageTitle>Donuts</PageTitle>
                <Container style="menu">
                    <Item
                        href={donutItems.image}
                        itemTitle={donutItems.title}
                        image={donutItems.image}
                    />
                    <Item
                        href={donutItems.image}
                        itemTitle={donutItems.title}
                        image={donutItems.image}
                    />
                    <Item
                        href={donutItems.image}
                        itemTitle={donutItems.title}
                        image={donutItems.image}
                    />
                    <Item
                        href={donutItems.image}
                        itemTitle={donutItems.title}
                        image={donutItems.image}
                    />
                </Container>
            </Wrapper>
        </>
    );
}
