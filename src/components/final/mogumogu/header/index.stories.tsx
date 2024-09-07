import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta = {
    title: "components/final/mogumogu/header", // Storybookのサイドパネルツリーを設定
    component: Header, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "テキスト",
    },
};

export const Opened: Story = {
    args: {
        children: "mogumogu",
    },
};
