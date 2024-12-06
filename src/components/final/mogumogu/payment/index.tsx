"use client";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
export const Payment = () => {
    const router = useRouter();

    const handlePayment = async () => {
        try {
            const response = await fetch("/api/final/checkout-api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    customer_id: "cus_RCHm8V3inYhCb8",
                    price_id: "price_1QJtCMEHa8zwKIe5Ks1qCsY2",
                }),
            });
            if (!response.ok) {
                throw new Error("Failed to create checkout session");
            }
            const data = await response.json();
            router.push(data.checkout_url);
        } catch (error) {
            console.error("Error during payment:", error);
        }
    };
    return (
        <>
            <div className={styles.align}>
                <h3>Stripe Test購入画面</h3>
                <button onClick={handlePayment}>入力画面へ</button>
            </div>
        </>
    );
};
