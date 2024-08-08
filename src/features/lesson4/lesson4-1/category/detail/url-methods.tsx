"use client";
import React from "react"; //nodeモジュールから読んできている
import { SectionTitle } from "@/components/lesson3";
("@/components/lesson3");
import {
    useRouter,
    usePathname,
    useParams,
    useSearchParams,
} from "next/navigation";

export const UrlMethods: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams();
    const paramHogeValue = searchParams.get("hoge"); //こうなるときはいつ？

    return (
        <>
            <SectionTitle>useRouter</SectionTitle>
            <button type="button" onClick={() => router.push("/")}>
                トップページへ
            </button>
            <SectionTitle>usePathname</SectionTitle>
            <p>{pathname}</p>
            <SectionTitle>useParams</SectionTitle>
            <p>{JSON.stringify(params)}</p>
            <SectionTitle>useSearchParams</SectionTitle>
            <p>{paramHogeValue}</p>
        </>
    );
};
