import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./";

const meta = {
    title: "components/lesson3/text", // Storybookのサイドパネルツリーを設定
    component: Text, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
    },
};
export const AlignLeft: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
        align: "left",
    },
};
export const AlignCenter: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
        align: "center",
    },
};
export const AlignRight: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        children: "テキスト",
        align: "right",
    },
};
