import type { Meta, StoryObj } from "@storybook/react";
import { ArrowButton } from ".";

const meta = {
    title: "components/final/mogumogu/arrow-button", // Storybookのサイドパネルツリーを設定
    component: ArrowButton, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
    },
};
