//Stripeを利用するためのAPI連携。
import { stripe } from "@/libs/final/mogumogu/stripe-server";
//nextapiresponseをインポート
import { NextApiRequest, NextApiResponse } from "next";

//決済画面を構築するためのAPIを作成
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    //顧客情報の取得
    const customer = await stripe.customers.retrieve(req.body.customer_id);
    //支払いセッションの実装
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price: req.body.price_id,
                quantity: 1,
            },
        ],
        mode: "payment",
        customer: customer.id,
        success_url: "http://localhost:3000/",
        cancel_url: "http://localhost:3000/",
    });
    return res.status(200).json({
        checkout_url: session.url,
    });
}
