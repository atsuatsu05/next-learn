//日本語表記を表示させるfetch処理
const getPokemonName = async (url: string) => {
    try {
        const res = await fetch(url, {
            cache: "no-store",
            method: "GET",
        });

        if (!res.ok) {
            return { statusCode: res.status, error: res.statusText };
        }

        const data = await res.json();

        const names = data.names;
        const name = names.find(
            (v: { language: { name: string } }) => v.language.name == "ja",
        ).name;

        return name;
    } catch (error) {
        //fetchが受け取れなかった時
        return { statusCode: null, error: "ネットワークエラー" };
    }
};

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
        const name = await getPokemonName(data.species.url);

        if (name.error) {
            return name.error;
        }

        return {
            statusCode: res.status,
            data: {
                name: name,
                imageUrl: data.sprites.other["official-artwork"].front_default,
            },
        };
    } catch (error) {
        //fetchが受け取れなかった時
        return { statusCode: null, error: "ネットワークエラー" };
    }
};
