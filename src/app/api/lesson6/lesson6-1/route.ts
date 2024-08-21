import { NextResponse } from "next/server";

const data = {
    title: "タイトル",
    description: "テキストテキストテキストテキストテキストテキスト",
};

export async function GET() {
    return NextResponse.json(data, { status: 200 }); //jsonを返してくれる
}

// 強制的に動的レンダリングを使用
//ビルドされたときに、静的な公開ができる
export const dynamic = "force-dynamic";
