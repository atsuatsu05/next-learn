"use server";

import {
    loginFormSchema,
    type LoginFormInputs,
} from "@/libs/lesson5/validation-schema";

export async function loginFormAction(data: LoginFormInputs) {
    //use Serverの時はasyncをつける！
    const result = loginFormSchema.safeParse(data); //ログイン画面から送信されたデータが送られ、サーバー側で検証される

    //バリデーションがOKの処理
    //successにtrueが入っている
    if (result.success) {
        /**
         * 必要あれば何かしらサーバーサイド処理を入れる
         */
        return { success: true, data: result.data };
    }
    if (result.error) {
        return { success: false, error: result.error.format() }; //エラーのメッセージが入っている
    }

    return { success: false }; //上記２つに当てはまらない例外のエラー
}
