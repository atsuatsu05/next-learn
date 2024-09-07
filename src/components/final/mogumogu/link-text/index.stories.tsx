import type { Meta, StoryObj } from "@storybook/react";
import { LinkText } from ".";

const meta = {
    title: "components/final/mogumogu/link-text", // Storybookのサイドパネルツリーを設定
    component: LinkText, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof LinkText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "テキスト",
        href: "URL",
    },
};
