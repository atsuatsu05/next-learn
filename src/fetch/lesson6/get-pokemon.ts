export const getPokemon = async (id: string) => {
    //エラーハンドリングは必ず入れる
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            cache: "no-store",
            method: "GET",
        });

        if (!res.ok) {
            return { statusCode: res.status, error: res.statusText };
        }

        const data = await res.json();
        return {
            statusCode: res.status,
            data: {
                name: data.name,
                imageUrl: data.sprites.other["official-artwork"].front_default,
            },
        };
    } catch (error) {
        //fetchが受け取れなかった時
        return { statusCode: null, error: "ネットワークエラー" };
    }
};
