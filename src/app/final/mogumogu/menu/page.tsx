import type { Metadata } from "next";
import {
    Wrapper,
    PageTitle,
    MenuTitle,
    MenuItemBox,
    PageButton,
    LinkText,
} from "@/components/final";
import { Donuts } from "@/features/final/mogumogu/donuts-fetch";
import { Foods } from "@/features/final/mogumogu/foods-fetch";
import { Drink } from "@/features/final/mogumogu/drinks-fetch";

export const metadata: Metadata = {
    title: "Menu | cafe mogumogu",
    description: "cafe mogumoguのMenuページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"menu"}>
                <PageTitle>Menu</PageTitle>
                <MenuTitle id={"donuts"}>Donuts</MenuTitle>
                <MenuItemBox>
                    <Donuts />
                </MenuItemBox>
                <MenuTitle id={"foods"}>Foods</MenuTitle>
                <MenuItemBox>
                    <Foods />
                </MenuItemBox>
                <MenuTitle id={"drink"}>Drink</MenuTitle>
                <MenuItemBox>
                    <Drink />
                </MenuItemBox>
                <PageButton>
                    <LinkText href="/final/mogumogu/cart">
                        カートの中身を見る
                    </LinkText>
                </PageButton>
            </Wrapper>
        </>
    );
}
