import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta = {
    title: "components/final/mogumogu/text", // Storybookのサイドパネルツリーを設定
    component: Text, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
    },
};
