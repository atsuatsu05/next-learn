import { NextResponse, type NextRequest } from "next/server";
import data from "./[id]/data";

export const GET = async (req: NextRequest) => {
    const newData = data.map((item) => ({
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        price: item.price,
    }));

    const searchParams = req.nextUrl.searchParams;
    let limit = Number(searchParams.get("limit"));
    let perPage = Number(searchParams.get("perPage"));
    let current = Number(searchParams.get("current"));

    limit = limit ? (Number.isNaN(limit) ? Infinity : limit) : Infinity;
    perPage = perPage
        ? Number.isNaN(perPage)
            ? newData.length
            : perPage
        : newData.length;
    current = current ? (Number.isNaN(current) ? 1 : current) : 1;

    const getDataByPage = () => {
        const startIndex = (current - 1) * perPage;
        const endIndex = startIndex + perPage;
        const pageData = newData
            .slice(startIndex, endIndex)
            .filter((_, i) => i < limit);

        return {
            // アイテムの総数
            totalItems: newData.length,
            // ページの総数
            totalPages: Math.ceil(newData.length / perPage),
            // 現在のページ番号
            currentPage: current,
            // 1ページあたりに表示するアイテム数。
            perPage: pageData.length,
            // 現在のページで表示するアイテムリスト
            items: pageData,
        };
    };

    const page = getDataByPage();

    return NextResponse.json(page, { status: 200 });
};

export const dynamic = "force-dynamic";
