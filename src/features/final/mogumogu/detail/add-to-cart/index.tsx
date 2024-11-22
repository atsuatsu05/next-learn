"use client";
import React, { useState } from "react";
import type { Metadata } from "next";
import {
    Container,
    DetailImage,
    DetailText,
    Counter,
    CartButton,
    PageButton,
    LinkText,
    TextRight,
} from "@/components/final";
import { UseRouter } from "@/features/final/mogumogu/detail/use-router";

export const metadata: Metadata = {
    title: "商品の詳細ページ",
    description: "cafemogumoguのDetailページ",
};

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
}

type AddToCartProps = {
    title: string;
    image: string;
    price: number;
    product: Product;
};

export const AddToCart: React.FC<AddToCartProps> = ({
    title,
    image,
    price,
    product,
}) => {
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };

    return (
        <>
            <Container style={"detail"}>
                <DetailImage src={image} alt={title} />
                <TextRight>
                    <DetailText name={title} price={`¥${price}(税込)`} />
                    <Counter
                        initialQuantity={quantity}
                        onQuantityChange={handleQuantityChange}
                    />
                    <CartButton product={product} quantity={quantity}>
                        カートに追加する
                    </CartButton>
                </TextRight>
            </Container>
            <LinkText href={"/final/mogumogu/cart"}>
                <PageButton>注文内容の確認へ</PageButton>
            </LinkText>
            <UseRouter />
        </>
    );
};
