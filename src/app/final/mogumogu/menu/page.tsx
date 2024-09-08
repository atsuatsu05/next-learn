import type { Metadata } from "next";
import {
    Wrapper,
    PageTitle,
    Container,
    MenuTitle,
    Item,
    MenuItemBox,
    DetailImage,
    DetailText,
    PageButton,
    LinkText,
} from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "cafe mogumoguのMenuページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"menu"}>
                <PageTitle>Menu</PageTitle>
                {/* <Container style="container"> */}
                <MenuTitle>Donuts</MenuTitle>
                <MenuItemBox>
                    <Container style={"item"}>
                        <DetailImage
                            src="/final/mogumogu/menu/d_choco.png"
                            alt="チョコレートドーナツ"
                        />
                        <DetailText
                            name="チョコレートドーナツ"
                            price="¥400（税込）"
                        />
                    </Container>
                    <Container style={"item"}>
                        <DetailImage
                            src="/final/mogumogu/menu/d_choco.png"
                            alt="チョコレートドーナツ"
                        />
                        <DetailText
                            name="チョコレートドーナツ"
                            price="¥400（税込）"
                        />
                    </Container>
                </MenuItemBox>
                <MenuTitle>Foods</MenuTitle>
                <MenuItemBox>
                    <Item
                        itemTitle="クレープ"
                        price="¥400（税込）"
                        image={"/final/mogumogu/menu/food_crepe.png"}
                        href="/final/mogumogu/menu/detail/2"
                    />
                </MenuItemBox>
                <MenuTitle>Drink</MenuTitle>
                <MenuItemBox>
                    <Item
                        itemTitle="ブレンドコーヒー"
                        price="¥400（税込）"
                        image={"/final/mogumogu/menu/dr_coffee.png"}
                        href="/final/mogumogu/menu/detail/3"
                    />
                </MenuItemBox>
                {/* </Container> */}
                <LinkText href="/final/mogumogu/cart">
                    <PageButton>カートの中身を見る</PageButton>
                </LinkText>
            </Wrapper>
        </>
    );
}
