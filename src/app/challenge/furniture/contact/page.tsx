import type { Metadata } from "next";
// import Image from "next/image";
import styles from "./styles.module.scss";
import { ContactInput, ContactTextArea } from "@/components/challenge";

export const metadata: Metadata = {
    title: "Contact",
    description: "Furniture DesignのContactページ",
};

export default function Page() {
    return (
        <>
            <p className={styles.title}>Contact</p>
            <form className={styles.form}>
                <ContactInput label="お名前" type="text" />
                <ContactInput label="メールアドレス" type="e-mail" />
                <ContactTextArea label="お問い合わせ" />
                <div className={styles.submitArea}>
                    <button className={styles.submit} type="submit">
                        送信
                    </button>
                </div>
            </form>
        </>
    );
}
