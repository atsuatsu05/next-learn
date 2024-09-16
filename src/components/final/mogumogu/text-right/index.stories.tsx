import type { Meta, StoryObj } from "@storybook/react";
import { TextRight } from ".";

const meta = {
    title: "components/final/mogumogu/text-right", // Storybookのサイドパネルツリーを設定
    component: TextRight, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof TextRight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
    },
};
