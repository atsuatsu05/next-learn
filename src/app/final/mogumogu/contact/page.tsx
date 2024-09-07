import type { Metadata } from "next";
import { Wrapper, PageTitle } from "@/components/final";
import { ContactForm } from "@/features/final/mogumogu/contact-form";

export const metadata: Metadata = {
    title: "cafe mogumogu",
    description: "cafe mogumoguのTOPページ",
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
