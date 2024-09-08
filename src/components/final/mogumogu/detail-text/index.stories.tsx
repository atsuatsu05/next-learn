import type { Meta, StoryObj } from "@storybook/react";
import { DetailText } from ".";

const meta = {
    title: "components/final/mogumogu/detail-text", // Storybookのサイドパネルツリーを設定
    component: DetailText, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof DetailText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        name: "商品名",
        price: "金額",
    },
};
