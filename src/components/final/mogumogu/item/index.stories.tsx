import type { Meta, StoryObj } from "@storybook/react";
import { Item } from ".";

const meta = {
    title: "components/final/mogumogu/item", // Storybookのサイドパネルツリーを設定
    component: Item, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        itemTitle: "プロダクトタイトル",
        price: "¥99,999 +tax",
        image: "テキスト",
        href: "テキスト",
    },
};
