import type { Meta, StoryObj } from "@storybook/react";
import { CartItemTitle } from ".";

const meta = {
    title: "components/final/mogumogu/cart-item-title", // Storybookのサイドパネルツリーを設定
    component: CartItemTitle, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof CartItemTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
    },
};
