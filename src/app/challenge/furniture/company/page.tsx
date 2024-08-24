import type { Metadata } from "next";
import {
    PageTitle,
    DefinitionItem,
    DefinitionList,
    Map,
} from "@/components/challenge";

export const metadata: Metadata = {
    title: "Company",
    description: "Furniture DesignのCompanyページ",
};

export default function Page() {
    return (
        <>
            <PageTitle>Company</PageTitle>
            <DefinitionList>
                <DefinitionItem dt="社名">
                    株式会社ファニチャーデザイン
                </DefinitionItem>
            </DefinitionList>

            <DefinitionList>
                <DefinitionItem dt="住所">
                    〒107-0062 東京都港区南青山１丁目××××××
                </DefinitionItem>
            </DefinitionList>
            <DefinitionList>
                <DefinitionItem dt="設立">XXXX年XX月</DefinitionItem>
            </DefinitionList>
            <DefinitionList>
                <DefinitionItem dt="資本金">XXXX万円 </DefinitionItem>
            </DefinitionList>
            <DefinitionList>
                <DefinitionItem dt="従業員数">XX名</DefinitionItem>
            </DefinitionList>
            <DefinitionList>
                <DefinitionItem dt="事業内容">
                    家具、インテリアの企画・生産
                    <br />
                    家具、インテリアの販売
                    <br />
                    店舗の企画・デザイン・設計
                </DefinitionItem>
            </DefinitionList>
            <Map src="/challenge/furniture/map.png" alt="マップ" />
        </>
    );
}
