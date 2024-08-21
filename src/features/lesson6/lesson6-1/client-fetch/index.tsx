"use client";
import React, { useState, useEffect } from "react";
import { getContents } from "@/fetch/lesson6/get-contents";

export const ClientFetch: React.FC = () => {
    //クライアント側にはasync使えない
    const [contents, setContents] = useState<{
        title: string;
        description: string | undefined;
    }>(undefined);
    useEffect(() => {
        const fetchGetContents = async () => {
            const contents = await getContents();
            setContents(contents);
        };
        fetchGetContents();
    });
    return (
        <>
            {contents && (
                <>
                    <h1>{contents.title}</h1>
                    <p>{contents.description}</p>
                </>
            )}
        </>
    );
};
