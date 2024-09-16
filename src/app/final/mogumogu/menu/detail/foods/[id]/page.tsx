import type { Metadata } from "next";
import {
    PageTitle,
    Wrapper,
    Container,
    DetailImage,
    DetailText,
    Counter,
    CartButton,
    PageButton,
    LinkText,
} from "@/components/final";
import { UseRouter } from "@/features/final/mogumogu/detail/use-router";
import { getFoodsFetch } from "@/fetch/final/get-foods-detail";
import { TextRight } from "@/components/challenge";

export const metadata: Metadata = {
    title: "商品の詳細ページ",
    description: "cafemogumoguのDetailページ",
};

type PageProps = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: PageProps) {
    const item = await getFoodsFetch(params.id);

    return (
        <>
            <Wrapper style="detail">
                <PageTitle>{item.title}</PageTitle>
                <Container style={"detail"}>
                    <DetailImage src={item.image.url} alt={item.title} />
                    <TextRight>
                        <DetailText
                            name={item.title}
                            price={`¥${item.price}(税込)`}
                        />
                        <Counter />
                        <CartButton value={item} quantity={item.quantity}>
                            カートに追加する
                        </CartButton>
                    </TextRight>
                </Container>
                <PageButton>
                    <LinkText href={"/final/mogumogu/cart"}>
                        注文内容の確認へ
                    </LinkText>
                </PageButton>
                <UseRouter />
            </Wrapper>
        </>
    );
}
