"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインフッターコンテンツ */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 会社情報 */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">すまいケア</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                福祉に寄り添う総合サポートとして、要支援の方とご家族のニーズに
                丁寧にお応えしています。札幌市を中心に、ホスピタリティあふれる
                サービスを提供しております。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:0120-651-340" className="text-primary hover:text-white transition-colors">
                    0120-651-340（フリーダイヤル）
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">営業時間：9:00〜18:00（年中無休）</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">札幌市およびその周辺地域</span>
                </div>
              </div>
            </div>

            {/* サービス一覧 */}
            <div>
              <h4 className="text-lg font-semibold mb-6">サービス</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="#services" className="hover:text-primary transition-colors">
                    高齢者住宅紹介
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-primary transition-colors">
                    福祉に寄り添った引っ越し
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-primary transition-colors">
                    特殊清掃サービス
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-primary transition-colors">
                    生前整頓・遺品整理
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-primary transition-colors">
                    家電リサイクル
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-primary transition-colors">
                    荷物預かりサービス
                  </Link>
                </li>
              </ul>
            </div>

            {/* サポート・その他 */}
            <div>
              <h4 className="text-lg font-semibold mb-6">サポート・その他</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-primary transition-colors">
                    私たちの強み
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">プライバシーポリシー</span>
                </li>
                <li>
                  <span className="text-gray-400">利用規約</span>
                </li>
                <li>
                  <span className="text-gray-400">会社概要</span>
                </li>
              </ul>

              {/* 緊急時の連絡先 */}
              <div className="mt-8 p-4 bg-red-900/30 border border-red-700 rounded-lg">
                <h5 className="text-red-300 font-semibold mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L3.312 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  緊急時24時間対応
                </h5>
                <p className="text-red-200 text-sm">
                  特殊清掃・緊急搬送など
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* フッター下部 */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 すまいケア. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                <span>保険加入済み・許可取得業者</span>
              </div>
              
              {/* ページトップに戻るボタン */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition-colors"
                aria-label="ページの上部に戻る"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;