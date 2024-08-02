import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./";

const meta = {
    title: "components/challenge/furniture/title", // Storybookのサイドパネルツリーを設定
    component: Title, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: { children: "コンテンツ" },
};
