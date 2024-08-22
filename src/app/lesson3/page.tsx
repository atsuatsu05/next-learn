import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import {
    PageTitle,
    Text,
    SectionTitle,
    DefinitionList,
    List,
    Contents,
    Counter,
    Toggle,
} from "@/components/lesson3"; //tsconfigで定めてる
import { getProfile } from "@/fetch/lesson3/get-profile";

export const metadata: Metadata = {
    title: "Lesson3 コンポーネントの作成と管理",
    description: "Lesson3 コンポーネントの作成と管理",
};

export default async function Page() {
    const {
        fullName,
        homeTown,
        age,
        hobbiesSkills,
        favoriteFoods,
        favoriteManga,
    } = await getProfile();
    return (
        <Contents>
            <PageTitle>自己紹介</PageTitle>

            <Text>
                私の名前は{fullName}です。
                <br />
                出身は{homeTown}です。
                <br />
                年齢は{age !== null ? `${age}歳` : "非公開"}です。
            </Text>
            <SectionTitle>趣味・特技</SectionTitle>
            <DefinitionList dt="趣味" dd={hobbiesSkills.hobbies} />
            <DefinitionList dt="特技" dd={hobbiesSkills.skills} />
            <SectionTitle>好きな食べ物</SectionTitle>
            <List list={favoriteFoods} />
            <SectionTitle>好きな漫画ランキング</SectionTitle>
            <List listType="ol" list={favoriteManga} />
            <SectionTitle>画像の練習</SectionTitle>
            <Image src="/dummy.png" width={150} height={150} alt="" priority />
            <SectionTitle>リンクの練習</SectionTitle>
            <Link href="/" className={styles.link}>
                トップページ
            </Link>
            <SectionTitle>カウンター</SectionTitle>
            <Counter />
            <SectionTitle>トグル</SectionTitle>
            <Toggle title="トグルボタン" opened={true}>
                コンテンツ
            </Toggle>
        </Contents>
    );
}
