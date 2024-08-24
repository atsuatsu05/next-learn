import type { Meta, StoryObj } from "@storybook/react";
import { Map } from ".";

const meta = {
    title: "components/challenge/furniture/map", // Storybookのサイドパネルツリーを設定
    component: Map, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //
    // propsに設定する値
    args: {
        src: "/challenge/furniture/map.png",
        alt: "map",
    },
};
