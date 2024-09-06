import { NextResponse, type NextRequest } from "next/server";
const basicAuthInvalid = true; //追記：basic認証無効化

export function middleware(req: NextRequest) {
    if (basicAuthInvalid) {
        //追記：basic認証無効化

        return NextResponse.next(); //追記：basic認証無効化
    }
    const basicAuth = req.headers.get("authorization");

    if (!basicAuth) {
        //basicAuthに情報が無ければ
        return new Response("Authentication required", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"',
            },
        });
    }

    try {
        //basicAuthに情報があれば
        const authValue = basicAuth.split(" ")[1]; //basicAuthに文字列が入ってくるので、split関数で空白区切りで配列にし、2番目の値をとってくる。
        const [user, pwd] = atob(authValue).split(":"); //atob関数でデコードしている。

        if (user === "test" && pwd === "pass12345") {
            return NextResponse.next();
        }
    } catch (e) {
        return new Response("Invalid Authentication", { status: 400 });
    }

    return new Response("Unauthorized", { status: 401 }); //401＝認証エラー
}
