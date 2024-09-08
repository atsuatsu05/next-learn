import type { Meta, StoryObj } from "@storybook/react";
import { DetailImage } from ".";

const meta = {
    title: "components/final/mogumogu/detail-image", // Storybookのサイドパネルツリーを設定
    component: DetailImage, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof DetailImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        children: "テキスト",
        src: "画像パス",
        alt: "テキスト",
    },
};
