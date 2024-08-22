import { Metadata } from "next";
import { Contents, PageTitle, SectionTitle } from "@/components/lesson3";
import { PokeDex } from "@/features/lesson6/lesson6-2/pokedex";

export const metadata: Metadata = {
    title: "Lesson6 APIとの連携",
    description: "Lesson6 APIとの連携",
};

type pageProps = {
    //動的ルーティングのパラメーターを取得している
    params: {
        pokeId: string;
    };
};

export default function Page({ params }: pageProps) {
    return (
        <Contents>
            <PageTitle>fetch関数の実装</PageTitle>
            <SectionTitle>ポケモン図鑑</SectionTitle>
            <PokeDex pokeId={params.pokeId} />
        </Contents>
    );
}
