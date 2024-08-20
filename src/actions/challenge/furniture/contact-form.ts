"use server";
import {
    contactFormSchema,
    type ContactFormInput,
} from "@/libs/challenge/furniture/validation-schema";

export async function ContactFormAction(data: ContactFormInput) {
    const result = contactFormSchema.safeParse(data);

    if (result.success) {
        ("/challenge/furniture/contact/complete");
        return { success: true, data: result.data };
    }
    if (result.error) {
        return { success: false, error: result.error.format() };
    }
    return { success: false };
}
