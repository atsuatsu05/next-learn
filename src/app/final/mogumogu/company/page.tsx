import type { Metadata } from "next";
import {
    Wrapper,
    PageTitle,
    Container,
    DefinitionList,
    DefinitionItem,
    Map,
} from "@/components/final";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "cafe mogumoguのTOPページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"company"}>
                <PageTitle>Company</PageTitle>
                <Container style="company">
                    <DefinitionList>
                        <DefinitionItem dt="open">
                            金・土・日 10：00〜17：00
                        </DefinitionItem>
                    </DefinitionList>
                    <DefinitionList>
                        <DefinitionItem dt="address">
                            宮城県刈田郡蔵王町遠刈田温泉
                        </DefinitionItem>
                    </DefinitionList>
                    <DefinitionList>
                        <DefinitionItem dt="tel">0224-12-3456</DefinitionItem>
                    </DefinitionList>
                </Container>
                <Map />
            </Wrapper>
        </>
    );
}
