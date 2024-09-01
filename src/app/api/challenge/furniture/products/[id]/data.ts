const items = [
    "aaa",
    "bbb",
    "ccc",
    "ddd",
    "eee",
    "fff",
    "ggg",
    "hhh",
    "iii",
    "jjj",
    "kkk",
    "lll",
    "mmm",
    "nnn",
    "ooo",
    "ppp",
    "qqq",
    "rrr",
    "sss",
    "ttt",
    "uuu",
    "vvv",
    "www",
    "xxx",
    "yyy",
    "zzz",
];

export type Details = {
    id: string;
    title: string;
    description: string;
    article: string;
    imageUrl: string;
    price: number;
    size: {
        w: number;
        d: number;
        h: number;
    };
    color: string;
    material: string;
};

const details: Details = {
    id: "xxx",
    title: "タイトル",
    description: "説明文",
    article:
        "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文\n\n本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
    imageUrl: "/challenge/furniture/detail.png",
    price: 99999,
    size: {
        w: 999,
        d: 999,
        h: 999,
    },
    color: "テキスト",
    material: "テキストテキストテキスト",
};

const data = items.map((item) => {
    const id = item;
    const title = `タイトル${item}`;
    const description = `${item}の説明文`;

    return { ...details, id, title, description };
});

export default data;
