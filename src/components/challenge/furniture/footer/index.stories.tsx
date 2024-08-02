import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";

const meta = {
    title: "components/challenge/furniture/footer", // Storybookのサイドパネルツリーを設定
    component: Footer, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: { children: "コンテンツ" },
};
