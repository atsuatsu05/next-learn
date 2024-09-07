import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from ".";

const meta = {
    title: "components/final/mogumogu/menu-item", // Storybookのサイドパネルツリーを設定
    component: MenuItem, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "テキスト",
        image: "画像パス",
        href: "URL",
        alt: "テキスト",
    },
};
