import type { Metadata } from "next";
import Image from "next/image";
import {
    ItemText,
    PageTitle,
    Wrapper,
    TextRight,
} from "@/components/challenge";
import { UseRouter } from "@/features/challenge/furniture/products/detail/use-router";
import { getProductsDetail } from "@/fetch/challenge/furniture/get-products-detail";

export const metadata: Metadata = {
    title: "Detail",
    description: "Furniture DesignのDetailページ",
};

type PageProps = {
    params: {
        id: string;
    };
};
type Item = {
    id: string;
    title: string;
    description: string;
    article: string;
    imageUrl: string;
    price: string;
    size: {
        w: number;
        d: string;
        h: string;
    };
    color: string;
    material: string;
};

export default async function Page({ params }: PageProps) {
    const item: Item = await getProductsDetail(params.id);
    console.log(item);
    return (
        <>
            <PageTitle>{item.title}</PageTitle>
            <Wrapper style="detail">
                <Image
                    src={item.imageUrl}
                    width={400}
                    height={400}
                    alt="detail"
                />
                <TextRight>
                    <ItemText
                        article={item.article}
                        size={`W${item.size.w} × D${item.size.d} × H${item.size.h}`}
                        price={`¥${item.price.toLocaleString()} +tax`}
                        color={item.color}
                        material={item.material}
                    ></ItemText>
                    <Wrapper style="back">
                        <UseRouter></UseRouter>
                    </Wrapper>
                </TextRight>
            </Wrapper>
        </>
    );
}
