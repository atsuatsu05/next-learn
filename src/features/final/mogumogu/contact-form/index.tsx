"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageButton, Wrapper } from "@/components/final";

import {
    contactFormSchema,
    type ContactFormInput,
} from "@/libs/final/mogumogu/validation-schema";
import { ContactInput } from "@/components/final/mogumogu/contact-input";
import { ContactTextArea } from "@/components/final/mogumogu/contact-textarea";
import { ContactFormAction } from "@/actions/final/mogumogu/contact-form";
import { ServerErrorText } from "@/components/final/mogumogu/serverError-text";

export const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormInput>({
        mode: "onBlur",
        resolver: zodResolver(contactFormSchema),
    });
    const [serverError, setServerError] = useState(false);
    const router = useRouter();

    //送信ボタンが押された時の処理
    const onSubmit = async (data: ContactFormInput) => {
        const result = await ContactFormAction(data);
        // サブミット後の処理を記載
        if (!result) {
            setServerError(true);
            console.log("不明なエラー");
            return;
        }

        //resultにエラーが入っていたら（バリデーションの条件に引っ掛かったら）
        if (result.error) {
            setServerError(true);
            console.log(result.error);
            return;
        }
        //どのエラーにも引っ掛からなかったら正常の処理をする
        setServerError(false);
        console.log(data);
        router.push("/final/mogumogu/contact/complete");
    };

    return (
        <>
            {serverError && (
                <ServerErrorText>
                    不正な値が送信されました。再度ご入力ください
                </ServerErrorText>
            )}
            <Wrapper style={"menu"}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <ContactInput
                        label="お名前"
                        type="text"
                        {...register("name")}
                    />

                    {/* <input type="text" {...register("name")} /> */}
                    {errors.name && (
                        <div className={styles.error}>
                            {errors.name.message}
                        </div>
                    )}
                    <ContactInput
                        label="メールアドレス"
                        type="email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <div className={styles.error}>
                            {errors.email.message}
                        </div>
                    )}

                    <ContactTextArea
                        label="お問い合わせ"
                        {...register("inquiry")}
                    />
                    {errors.inquiry && (
                        <div className={styles.error}>
                            {errors.inquiry.message}
                        </div>
                    )}
                    <div className={styles.submitArea}>
                        <PageButton>送信</PageButton>
                    </div>
                </form>
            </Wrapper>
        </>
    );
};
