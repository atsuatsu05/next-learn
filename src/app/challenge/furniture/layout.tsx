import { Metadata } from "next";
import "@/styles/index.scss";
import styles from "./style.module.scss";
import { Header, Footer } from "@/components/challenge";

export const metadata: Metadata = {
    title: "TOP|Furniture Design",
    description: "TOPページ",
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <Header>Furniture Design</Header>
            <div>{children}</div>
            <Footer copyright="© Furniture Design"></Footer>
        </div>
    );
}
