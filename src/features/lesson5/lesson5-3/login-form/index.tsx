"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    loginFormSchema,
    type LoginFormInputs,
} from "@/libs/lesson5/validation-schema";
import { loginFormAction } from "@/actions/lesson5/login-form";

export const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        mode: "onBlur",
        resolver: zodResolver(loginFormSchema),
    });
    const [serverError, setServerError] = useState(false);

    //送信ボタンが押された時の処理
    const onSubmit = async (data: LoginFormInputs) => {
        const result = await loginFormAction(data); //await:同期処理される
        // サブミット後の処理を記載
        //resultに何も返ってこなかった場合の処理
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
    };

    return (
        <>
            {serverError && <div>不正な操作が行われました</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ID</label>
                <br />
                <input type="text" {...register("id")} />
                {errors.id && <div>{errors.id.message}</div>}
                <br />
                <label>パスワード</label>
                <br />
                <input type="password" {...register("password")} />
                {errors.password && <div>{errors.password.message}</div>}
                <br />
                <button>送信</button>
            </form>
        </>
    );
};
