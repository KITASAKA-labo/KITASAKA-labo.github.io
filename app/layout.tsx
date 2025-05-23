import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[医用画像処理研究室]北坂研究室WEBサイト",
  description: "愛知工業大学 医用画像処理研究室の公式WEBサイト",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <meta name="google-site-verification" content="QAJjM69IThju8LcYyqEwNQ19rJZICXaD9ka_8lLnChw" />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
