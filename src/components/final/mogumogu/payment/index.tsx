"use client";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
export const Payment = () => {
    const { push } = useRouter();
    return (
        <>
            <div className={styles.align}>
                <h3>Stripe Test購入画面</h3>
                <button
                    // className={styles.align}
                    onClick={async () => {
                        const response = await fetch(
                            "/api/final/checkout-api",
                            {
                                method: "post",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    customer_id: "cus_RCHm8V3inYhCb8",
                                    price_id: "price_1QJtCMEHa8zwKIe5Ks1qCsY2",
                                }),
                            },
                        ).then((data) => data.json());
                        push(response.checkout_url);
                    }}
                >
                    入力画面へ
                </button>
            </div>
        </>
    );
};
