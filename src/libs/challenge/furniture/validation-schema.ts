import { z } from "zod";

export const contactFormSchema = z.object({
    //スキーマ（ルール）を定義する
    name: z
        .string()
        .min(1, { message: "お名前を入力してください。" })
        .max(50, { message: "50文字以内で入力してください。" }),
    email: z
        .string()
        .min(1, { message: "メールアドレスを入力してください。" })
        .email({ message: "メールアドレスを正しく入力してください。" })
        .max(255, { message: "255文字以内で入力してください。" }),
    inquiry: z
        .string()
        .min(1, { message: "お問い合わせ内容を入力してください。" })
        .max(1000, { message: "1000文字以内で入力してください。" }),
});
//定義した上記のスキーマを使用して、Typescriptの型定義する
export type ContactFormInput = z.infer<typeof contactFormSchema>;
