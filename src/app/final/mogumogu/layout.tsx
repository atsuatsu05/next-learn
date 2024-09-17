import { Metadata } from "next";
import "@/styles/index.scss";
import { Header, Footer } from "@/components/final";

export const metadata: Metadata = {
    title: "TOP|mogumogu",
    description: "TOPページ",
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body>
                <Header />
                <div>{children}</div>
                <Footer copyright="© cafe mogumogu" />
            </body>
        </html>
    );
}
