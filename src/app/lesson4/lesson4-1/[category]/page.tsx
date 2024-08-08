type PageProps = {
    params: {
        category: string;
    };
};

export default function Page({ params }: PageProps) {
    return <div>{params.category}ページ</div>;
}
