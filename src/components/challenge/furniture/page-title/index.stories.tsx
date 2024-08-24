import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "./";

const meta = {
    title: "components/challenge/furniture/page-title", // Storybookのサイドパネルツリーを設定
    component: PageTitle, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
    },
};
