import { NextResponse } from "next/server";

const fullName: string = "本橋温美";
const homeTown: string = "宮城県";
const age: number | null = null;
const hobbiesSkills: { hobbies: string; skills: string } = {
    hobbies: "喫茶店巡り・音楽鑑賞",
    skills: "片倒立",
};
const favoriteFoods: string[] = ["ドーナツ", "お団子", "焼肉"];
const favoriteManga: string[] = ["スラムダンク", "MAJOR", "コナン"];

const data = {
    fullName,
    homeTown,
    age,
    hobbiesSkills,
    favoriteFoods,
    favoriteManga,
};

export async function GET() {
    return NextResponse.json(data, { status: 200 });
}
export const dynamic = "force-dynamic";
