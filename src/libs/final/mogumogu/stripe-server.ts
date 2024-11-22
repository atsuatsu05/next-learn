//Stripeを利用するためのAPI連携。
import Stripe from "stripe";
export const stripe = new Stripe(
    "sk_test_51QJsizEHa8zwKIe5SMXXb8RgI7vpHoky5kg2VOQprSDWSkM3ZsIwGY2nQU9oRylRHlxosXUfr6kG0gqRgmtQiR5h00H6N0qHh6",
    {
        apiVersion: "2024-10-28.acacia",
    },
);
