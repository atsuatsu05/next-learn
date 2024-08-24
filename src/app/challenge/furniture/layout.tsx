import { Metadata } from "next";
import "@/styles/index.scss";
import { Header, Footer, Container } from "@/components/challenge";

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
        <Container>
            <Header>Furniture Design</Header>
            {children}
            <Footer copyright="© Furniture Design"></Footer>
        </Container>
    );
}
