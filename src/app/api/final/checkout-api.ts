//Stripeを利用するためのAPI連携。
import Stripe from "stripe";
const stripe = new Stripe(
    "sk_test_51QJsizEHa8zwKIe5SMXXb8RgI7vpHoky5kg2VOQprSDWSkM3ZsIwGY2nQU9oRylRHlxosXUfr6kG0gqRgmtQiR5h00H6N0qHh6",
    {
        apiVersion: "2024-10-28.acacia",
    },
);
//決済画面を構築するためのAPIを作成
export default async function handler(req, res) {
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
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });
    return res.status(200).json({
        checkout_url: session.url,
    });
}
