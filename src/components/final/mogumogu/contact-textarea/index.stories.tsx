import type { Meta, StoryObj } from "@storybook/react";
import { ContactTextArea } from ".";

const meta = {
    title: "components/final/mogumogu/contact-textarea", // Storybookのサイドパネルツリーを設定
    component: ContactTextArea, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof ContactTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        label: "テキスト",
    },
};
