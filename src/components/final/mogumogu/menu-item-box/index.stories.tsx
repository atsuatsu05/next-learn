import type { Meta, StoryObj } from "@storybook/react";
import { MenuItemBox } from ".";

const meta = {
    title: "components/final/mogumogu/menu-item-box", // Storybookのサイドパネルツリーを設定
    component: MenuItemBox, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof MenuItemBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "コンテンツ",
    },
};
