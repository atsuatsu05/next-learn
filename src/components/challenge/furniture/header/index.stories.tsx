import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta = {
    title: "components/challenge/furniture/header", // Storybookのサイドパネルツリーを設定
    component: Header, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "Furniture Design",
    },
};

export const Opened: Story = {
    args: {
        children: "Furniture Design",
        opened: true,
    },
};
