import { z } from "zod";

export const loginFormSchema = z.object({
    //スキーマ（ルール）を定義する
    id: z.string().min(1, { message: "IDは必須です" }), //必須値のバリデーショん（nonemptyは非推奨で使えない！）
    password: z
        .string()
        .min(1, { message: "パスワードは必須です" })
        .min(6, { message: "6文字以上入れてください" }),
});
//定義した上記のスキーマを使用して、Typescriptの型定義する
export type LoginFormInputs = z.infer<typeof loginFormSchema>;
