import { NextResponse, type NextRequest } from "next/server";
import data from "./data";

export const GET = async (req: NextRequest) => {
    const segments = req.nextUrl.pathname.split("/");
    const param = segments[segments.length - 1];
    const detailData = data.find((item) => item.id === param);

    if (!detailData) {
        return new NextResponse(null, { status: 404 });
    }

    return NextResponse.json(detailData, { status: 200 });
};

export const dynamic = "force-dynamic";
