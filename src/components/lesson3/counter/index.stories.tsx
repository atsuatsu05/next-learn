import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./";

const meta = {
    title: "components/lesson3/counter", // Storybookのサイドパネルツリーを設定
    component: Counter, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {},
};
