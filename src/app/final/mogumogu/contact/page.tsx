import type { Metadata } from "next";
import { Wrapper, PageTitle } from "@/components/final";
import { ContactForm } from "@/features/final/mogumogu/contact-form";

export const metadata: Metadata = {
    title: "Contact | cafe mogumogu",
    description: "cafe mogumoguのContactページ",
};

export default function Page() {
    return (
        <>
            <Wrapper style={"contact"}>
                <PageTitle>Contact</PageTitle>
                <ContactForm />
            </Wrapper>
        </>
    );
}
