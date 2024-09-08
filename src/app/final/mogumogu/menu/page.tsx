import type { Metadata } from "next";
import {
    Wrapper,
    PageTitle,
    Container,
    MenuTitle,
    Item,
    MenuItemBox,
} from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "cafe mogumoguのTOPページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"menu"}>
                <PageTitle>Menu</PageTitle>
                {/* <Container style="container"> */}
                <MenuTitle>Donuts</MenuTitle>
                <MenuItemBox>
                    <Item
                        itemTitle="チョコレートドーナツ"
                        price="¥400（税込）"
                        image={"/final/mogumogu/menu/d_choco.png"}
                        href="/final/mogumogu/menu/donuts"
                    />
                </MenuItemBox>
                <MenuTitle>Foods</MenuTitle>
                <MenuItemBox>
                    <Item
                        itemTitle="クレープ"
                        price="¥400（税込）"
                        image={"/final/mogumogu/menu/food_crepe.png"}
                        href="/final/mogumogu/menu/foods"
                    />
                </MenuItemBox>
                <MenuTitle>Drink</MenuTitle>
                <MenuItemBox>
                    <Item
                        itemTitle="ブレンドコーヒー"
                        price="¥400（税込）"
                        image={"/final/mogumogu/menu/dr_coffee.png"}
                        href="/final/mogumogu/menu/drink"
                    />
                </MenuItemBox>
                {/* </Container> */}
            </Wrapper>
        </>
    );
}
