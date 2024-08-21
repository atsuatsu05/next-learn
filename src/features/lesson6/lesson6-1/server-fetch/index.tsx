import React from "react";
import { getContents } from "@/fetch/lesson6/get-contents";

export const ServerFetch: React.FC = async () => {
    const contents = await getContents();
    console.log(contents);
    return (
        <>
            <h1>{contents.title}</h1>
            <p>{contents.description}</p>
        </>
    );
};
