import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPokemon } from "@/fetch/lesson6/get-pokemon-ja";

type PokeDexProps = {
    pokeId: string;
};

export const PokeDex: React.FC<PokeDexProps> = async ({ pokeId }) => {
    const pokeData = await getPokemon(pokeId);

    if (pokeData.statusCode === 404) {
        //next.jsのnotfound画面を表示させる
        notFound();
    }
    return (
        <>
            {pokeData.error && <>{pokeData.error}</>}
            {pokeData.data && (
                <>
                    <h3>{pokeData.data.name}</h3>
                    <Image
                        src={pokeData.data.imageUrl}
                        width={200}
                        height={200}
                        alt={pokeData.data.name}
                    />
                    {!Number.isNaN(pokeId) && (
                        <div>
                            <Link
                                href={`/lesson6/lesson6-2/${Number(pokeId) - 1}`}
                            >
                                前へ
                            </Link>
                            <Link
                                href={`/lesson6/lesson6-2/${Number(pokeId) + 1}`}
                            >
                                次へ
                            </Link>
                        </div>
                    )}
                </>
            )}
        </>
    );
};
