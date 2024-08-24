import type { Metadata } from "next";
// import Image from "next/image";
import { PageTitle, Wrapper } from "@/components/challenge";
import { ContactForm } from "@/features/challenge/furniture/contact/contact-form";

export const metadata: Metadata = {
    title: "Contact",
    description: "Furniture DesignのContactページ",
};

export default function Page() {
    return (
        <Wrapper style="contact">
            <PageTitle>Contact</PageTitle>
            <ContactForm />
        </Wrapper>
    );
}
