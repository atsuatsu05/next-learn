import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from ".";

const meta = {
    title: "components/final/mogumogu/text-button", // Storybookのサイドパネルツリーを設定
    component: TextButton, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "テキスト",
    },
};
