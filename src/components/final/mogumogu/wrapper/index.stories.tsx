import type { Meta, StoryObj } from "@storybook/react";
import { Wrapper } from ".";

const meta = {
    title: "components/final/mogumogu/wrapper", // Storybookのサイドパネルツリーを設定
    component: Wrapper, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
    },
};
