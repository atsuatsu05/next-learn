import React from "react";
import { Text } from "../text";

export const AboutText: React.FC = () => {
    return (
        <>
            <Text style={"about"}>
                素朴なお菓子と美味しい空気があるお店 mogumogu
            </Text>
            <Text style={"about"}>
                木々の緑と、自然の音に身をゆだねて、ぼーっとする時間をご提供します。
                <br />
                そんな時間のおともに、ドーナツやドリンクをどうぞ。
                <br />
                どんなときも、もぐもぐすれば、お腹もこころもホッと一息つけるはず。
            </Text>
            <Text style={"about"}>どうぞごゆるりとお過ごしください。</Text>
        </>
    );
};
