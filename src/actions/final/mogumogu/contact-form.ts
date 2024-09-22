"use server";
import {
    contactFormSchema,
    type ContactFormInput,
} from "@/libs/final/mogumogu/validation-schema";

export async function ContactFormAction(data: ContactFormInput) {
    const result = contactFormSchema.safeParse(data);

    if (result.success) {
        ("/final/mogumogu/contact/complete");
        return { success: true, data: result.data };
    }
    if (result.error) {
        return { success: false, error: result.error.format() };
    }
    return { success: false };
}
