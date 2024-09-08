import type { Meta, StoryObj } from "@storybook/react";
import { ContactSelect } from ".";

const meta = {
    title: "components/final/mogumogu/contact-select", // Storybookのサイドパネルツリーを設定
    component: ContactSelect, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof ContactSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {},
};
