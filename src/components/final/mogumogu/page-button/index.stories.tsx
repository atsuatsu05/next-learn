import type { Meta, StoryObj } from "@storybook/react";
import { PageButton } from ".";

const meta = {
    title: "components/final/mogumogu/page-button", // Storybookのサイドパネルツリーを設定
    component: PageButton, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof PageButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
    },
};
