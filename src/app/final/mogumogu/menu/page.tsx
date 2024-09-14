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
    title: "cafe mogumogu",
    description: "cafe mogumoguのMenuページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"menu"}>
                <PageTitle>Menu</PageTitle>
                <MenuTitle>Donuts</MenuTitle>
                <MenuItemBox>
                    <Donuts />
                </MenuItemBox>
                <MenuTitle>Foods</MenuTitle>
                <MenuItemBox>
                    <Foods />
                </MenuItemBox>
                <MenuTitle>Drink</MenuTitle>
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
