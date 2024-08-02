import type { Meta, StoryObj } from "@storybook/react";
import { PageNation } from ".";

const meta = {
    title: "components/challenge/furniture/page-nation", // Storybookのサイドパネルツリーを設定
    component: PageNation, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof PageNation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: { children: "コンテンツ" },
};
