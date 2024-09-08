import type { Meta, StoryObj } from "@storybook/react";
import { MainImage } from ".";

const meta = {
    title: "components/challenge/furniture/main-image", // Storybookのサイドパネルツリーを設定
    component: MainImage, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof MainImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        src: "画像パス",
    },
};
