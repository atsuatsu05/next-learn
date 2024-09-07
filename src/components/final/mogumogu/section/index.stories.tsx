import type { Meta, StoryObj } from "@storybook/react";
import { Section } from ".";

const meta = {
    title: "components/final/mogumogu/section", // Storybookのサイドパネルツリーを設定
    component: Section, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
    },
};
