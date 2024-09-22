import type { Meta, StoryObj } from "@storybook/react";
import { HeaderIcon } from ".";

const meta = {
    title: "components/final/mogumogu/header-icon", // Storybookのサイドパネルツリーを設定
    component: HeaderIcon, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof HeaderIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "テキスト",
        src: "/final/mogumogu/cart_icon.png",
        alt: "テキスト",
        href: "URL",
    },
};
