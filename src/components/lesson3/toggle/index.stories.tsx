import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./";

const meta = {
    title: "components/lesson3/toggle", // Storybookのサイドパネルツリーを設定
    component: Toggle, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        title: "タイトル",
        children: "コンテンツ",
    },
};
export const Opened: Story = {
    // propsに設定する値
    args: {
        title: "タイトル",
        children: "コンテンツ",
        opened: true,
    },
};
