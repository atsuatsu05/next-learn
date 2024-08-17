import type { Meta, StoryObj } from "@storybook/react";
import { ContactInput } from ".";

const meta = {
    title: "components/challenge/furniture/contact-input", // Storybookのサイドパネルツリーを設定
    component: ContactInput, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof ContactInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        label: "お名前",
        type: "text",
    },
};
