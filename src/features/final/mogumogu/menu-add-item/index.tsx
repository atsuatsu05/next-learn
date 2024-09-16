"use client";
import {
    Container,
    DetailImage,
    DetailText,
    CartButton,
    Counter,
    Link,
} from "@/components/final";

type MenuAddItemProps = {
    id: string;
    title: string;
    image: string;
    price: string | number;
    quantity: string | number;
    addToCart?: string[];
};

export const MenuAddItem: React.FC<MenuAddItemProps> = ({
    id,
    title,
    image,
    price,
    quantity,
    addToCart,
}) => {
    return (
        <>
            <Container style={"item"}>
                <DetailImage src={image} alt={title} />
                <DetailText name={title} price={`¥${price}（税込）`} />
                {/* <Counter />
                <CartButton
                    value={JSON.stringify({ id })}
                    quantity={JSON.stringify({ quantity })}
                >
                    カートに追加
                </CartButton> */}
            </Container>
        </>
    );
};
