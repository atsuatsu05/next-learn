import type { Meta, StoryObj } from "@storybook/react";
import { Container } from ".";

const meta = {
    title: "components/final/mogumogu/container", // Storybookのサイドパネルツリーを設定
    component: Container, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
        style: "company",
    },
};
