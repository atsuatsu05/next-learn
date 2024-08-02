import type { Meta, StoryObj } from "@storybook/react";
import { ItemText } from ".";

const meta = {
    title: "components/challenge/furniture/item-text", // Storybookのサイドパネルツリーを設定
    component: ItemText, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof ItemText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
        size: "W999 × D999 × H999",
        color: "テキスト",
        material: "テキストテキストテキスト",
    },
};
