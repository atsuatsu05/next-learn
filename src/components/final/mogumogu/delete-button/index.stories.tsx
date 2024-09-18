import type { Meta, StoryObj } from "@storybook/react";
import { DeleteButton } from ".";

const meta = {
    title: "components/final/mogumogu/delete-button", // Storybookのサイドパネルツリーを設定
    component: DeleteButton, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof DeleteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
    },
};
