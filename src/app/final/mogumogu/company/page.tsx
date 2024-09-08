import type { Metadata } from "next";
import {
    Wrapper,
    Text,
    PageTitle,
    Container,
    DefinitionList,
    DefinitionItem,
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
                <Container>
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
                <Text>アクセス</Text>
            </Wrapper>
        </>
    );
}
