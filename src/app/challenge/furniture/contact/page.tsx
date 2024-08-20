import type { Metadata } from "next";
// import Image from "next/image";
import styles from "./styles.module.scss";
import { ContactForm } from "@/features/challenge/furniture/contact/contact-form";

export const metadata: Metadata = {
    title: "Contact",
    description: "Furniture DesignのContactページ",
};

export default function Page() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Contact</p>
            <ContactForm />
        </div>
    );
}
