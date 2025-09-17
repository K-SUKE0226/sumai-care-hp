import type { Metadata } from "next";
import { Noto_Sans_JP, Roboto } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: 'swap',
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "すまいケア｜福祉に寄り添う総合サポート",
  description: "高齢者住宅紹介、福祉引っ越し、中古家電販売・買取、荷物預かりなど、要支援の方とご家族のニーズに丁寧にお応えする総合サポートサービス。札幌市を中心にホスピタリティあふれるサービスを提供しています。",
  keywords: "高齢者住宅,介護引っ越し,中古家電販売,荷物預かり,札幌,介護サポート",
  openGraph: {
    title: "すまいケア｜福祉に寄り添う総合サポート",
    description: "要支援の方とご家族のニーズに丁寧にお応えする総合サポートサービス",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
