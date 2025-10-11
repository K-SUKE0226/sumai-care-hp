import type { Metadata } from "next";
import { Zen_Maru_Gothic, Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

// 温かみのある丸ゴシック（見出し用）
const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

// 読みやすい角ゴシック（本文用）
const zenKakuGothic = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  display: 'swap',
});

// フォールバック用
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "住まいサポートケア｜札幌の福祉型住環境支援｜株式会社スマイリード",
  description: "札幌で家財整理・住宅紹介・引越し支援・荷物保管を通じて、高齢者・障がい者・生活困窮者の暮らしを支える福祉型サービス。行政・包括・ケアマネジャーと連携し、安心の住環境を提供します。",
  keywords: "住まいサポートケア,スマイリード,家財整理,遺品整理,住宅紹介,引越し支援,荷物保管,札幌,福祉,高齢者支援",
  openGraph: {
    title: "住まいサポートケア｜札幌の福祉型住環境支援",
    description: "人と住まいに、まごころを。損得ではなく善悪で判断する、札幌の福祉型支援サービス",
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
        className={`${zenMaruGothic.variable} ${zenKakuGothic.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
