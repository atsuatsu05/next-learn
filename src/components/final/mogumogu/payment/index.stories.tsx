import type { Meta, StoryObj } from "@storybook/react";
import { Payment } from "./";

const meta = {
    title: "components/final/mogumogu/page-title", // Storybookのサイドパネルツリーを設定
    component: Payment, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Payment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
    },
};
