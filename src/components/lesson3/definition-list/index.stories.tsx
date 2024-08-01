import type { Meta, StoryObj } from "@storybook/react";
import { DefinitionList } from "./";

const meta = {
    title: "components/lesson3/definition-list", // Storybookのサイドパネルツリーを設定
    component: DefinitionList, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof DefinitionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        //読み込んだコンポーネントのPropsと連携している
        dt: "タイトル",
        dd: "コンテンツ",
    },
};
