import type { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "./";

const meta = {
    title: "components/final/mogumogu/section-title", // Storybookのサイドパネルツリーを設定
    component: SectionTitle, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
    },
};
