import { notFound } from "next/navigation";
import { Contents, Text, PageTitle } from "@/components/lesson3";
import { UrlMethods } from "@/features/lesson4/lesson4-1/category/detail/url-methods";
type PageProps = {
    params: {
        category: string;
        detail: string;
    };
};

const data = [
    {
        id: "aaa",
        title: "タイトルa",
        contents: "コンテンツa",
    },
    {
        id: "bbb",
        title: "タイトルb",
        contents: "コンテンツb",
    },
    {
        id: "ccc",
        title: "タイトルc",
        contents: "コンテンツc",
    },
    {
        id: "ddd",
        title: "タイトルd",
        contents: "コンテンツd",
    },
];

export default function Page({ params }: PageProps) {
    const detailData = data.find((item) => item.id === params.detail);
    if (!detailData === undefined) {
        //notfoundに遷移させる記述
        notFound();
    }

    return (
        <Contents>
            {/*動的にコンテンツを出しわけ */}
            <PageTitle>{detailData?.title}</PageTitle>
            <Text>{detailData?.contents}</Text>
            {/*URL系のメソッドを試す */}
            <UrlMethods />
        </Contents>
    );
}
export const generateMetadata = ({ params }: PageProps) => {
    const detailData = data.find((item) => item.id === params.detail);

    return {
        title: `タイトル: ${detailData?.title}`,
        description: `ディスクリプション: ${detailData?.contents}`,
    };
};
