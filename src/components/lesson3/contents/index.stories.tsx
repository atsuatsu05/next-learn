import type { Meta, StoryObj } from "@storybook/react";
import { Contents } from "./";

const meta = {
    title: "components/lesson3/counter", // Storybookのサイドパネルツリーを設定
    component: Contents, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Contents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: { children: "コンテンツ" },
};
