import type { Meta, StoryObj } from "@storybook/react";
import { MenuTitle } from ".";

const meta = {
    title: "components/final/mogumogu/menu-title", // Storybookのサイドパネルツリーを設定
    component: MenuTitle, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof MenuTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "テキスト",
    },
};
