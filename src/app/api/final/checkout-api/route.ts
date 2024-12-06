//Stripeを利用するためのAPI連携。
import { stripe } from "@/libs/final/mogumogu/stripe-server";

//決済画面を構築するためのAPIを作成
export async function POST(req: Request) {
    try {
        //顧客情報・商品情報の取得
        const { customer_id, price_id } = await req.json();

        //支払いセッションの実装
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price: price_id,
                    quantity: 1,
                },
            ],
            mode: "payment",
            customer: customer_id,
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
        });
        return new Response(
            JSON.stringify({
                checkout_url: session.url,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            },
        );
    } catch (error) {
        console.error("Error creating Stripe session:", error);
        return new Response(
            JSON.stringify({ error: "Failed to create Stripe session" }),
            { status: 500 },
        );
    }
}
