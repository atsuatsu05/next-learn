import type { Metadata } from "next";
import { Wrapper, PageTitle, Container, MenuItem } from "@/components/final";

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
                <MenuItem
                    image={"/final/mogumogu/menu/d_choco.png"}
                    href="/final/mogumogu/menu/donuts"
                    alt=""
                >
                    Donuts
                </MenuItem>
                <MenuItem
                    image={"/final/mogumogu/menu/food_crepe.png"}
                    href="/final/mogumogu/menu/foods"
                    alt=""
                >
                    Foods
                </MenuItem>
                <MenuItem
                    image={"/final/mogumogu/menu/dr_coffee.png"}
                    href="/final/mogumogu/menu/drink"
                    alt=""
                >
                    Drink
                </MenuItem>
                {/* </Container> */}
            </Wrapper>
        </>
    );
}
