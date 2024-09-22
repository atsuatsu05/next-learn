import type { Meta, StoryObj } from "@storybook/react";
import { ServerErrorText } from "./";

const meta = {
    title: "components/final/mogumogu/serverError-text", // Storybookのサイドパネルツリーを設定
    component: ServerErrorText, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof ServerErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "テキスト",
    },
};
