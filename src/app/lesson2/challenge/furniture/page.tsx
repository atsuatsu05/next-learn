import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "style.module.scss";

export const metadata: Metadata = {
    title: "TOP|Furniture Design",
    description: "TOPページ",
};
export default function Page() {
    return (
        <>
            <h1 className="logo">Furniture Design</h1>
            <span>-</span>
            <span>-</span>
            <Image
                src="/challenge/furniture/main.png"
                width={1000}
                height={600}
                alt=""
            />
            <h2>About</h2>
            <p>
                AboutテキストAboutテキストAboutテキストAboutテキストAboutテキスト
                Aboutテキスト
            </p>
            <h2>Products</h2>
            <section>
                <div>
                    <Image src="/dummy.png" width={150} height={150} alt="" />
                    <p>
                        プロダクトタイトル
                        <br />
                        ¥99,999 +tax
                    </p>
                </div>
                <div>
                    <Image src="/dummy.png" width={150} height={150} alt="" />
                    <p>
                        プロダクトタイトル
                        <br />
                        ¥99,999 +tax
                    </p>
                </div>
                <div>
                    <Image src="/dummy.png" width={150} height={150} alt="" />
                    <p>
                        プロダクトタイトル
                        <br />
                        ¥99,999 +tax
                    </p>
                </div>
            </section>

            <Link href="/challenge/furniture/products">View More</Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/challenge/furniture/products">
                            PRODUCTS
                        </Link>
                    </li>
                    <li>
                        <Link href="/challenge/furniture/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/challenge/furniture/company">COMPANY</Link>
                    </li>
                    <li>
                        <Link href="#">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
