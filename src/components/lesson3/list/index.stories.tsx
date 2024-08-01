import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./";

const meta = {
    title: "components/lesson3/list", // Storybookのサイドパネルツリーを設定
    component: List, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
    },
};

export const OrderList: Story = {
    args: {
        //読み込んだコンポーネントのPropsと連携している
        list: ["リスト", "リスト", "リスト"],
        listType: "ol",
    },
};
