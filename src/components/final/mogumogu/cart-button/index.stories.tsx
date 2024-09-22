import type { Meta, StoryObj } from "@storybook/react";
import { CartButton } from ".";

const meta = {
    title: "components/final/mogumogu/cart-button", // Storybookのサイドパネルツリーを設定
    component: CartButton, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof CartButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
        product: {
            id: 1,
            title: "タイトル",
            image: "商品画像",
            price: 999,
        },
        quantity: 1,
    },
};
