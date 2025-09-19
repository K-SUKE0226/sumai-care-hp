import Link from "next/link";
import Image from "next/image";

const RealEstateHeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* コンテンツ */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm">
                不動産会社様向け専門サービス
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-primary">不動産会社様の</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl">お困りごとを&lsquo;すべて&rsquo;解決します</span>
            </h1>
            <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-3">
              <p className="font-semibold text-primary">退去後の残置物から入居前サポートまで</p>
              <p>オーナー様の満足度向上と物件価値の維持をお手伝いします</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">生活保護対応</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">送迎サービス</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">特殊清掃対応</span>
              </div>
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span>サービス資料請求</span>
              </Link>
              <a
                href="tel:0120-651-340"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>お電話でのご相談</span>
              </a>
            </div>

            {/* 営業時間 */}
            <div className="mt-6 text-sm text-gray-500">
              <p>営業時間：9:00〜18:00（年中無休）</p>
              <p>札幌市内・近郊対応｜法人向け月末締め請求可能</p>
            </div>
          </div>

          {/* ビジュアル */}
          <div className="relative">
            {/* メイン画像 */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden mb-6">
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <Image
                  src="/images/services/IMG_3355.JPG"
                  alt="すまいケアの不動産向けサービス"
                  fill
                  className="object-cover"
                />
                {/* 写真上のオーバーレイテキスト */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-semibold mb-2">不動産会社様専用窓口</h3>
                    <p className="text-sm">迅速対応でオーナー様の信頼獲得をサポート</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 特徴ポイント */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">即日対応</h4>
                  <p className="text-xs text-gray-600">緊急案件OK</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">法人対応</h4>
                  <p className="text-xs text-gray-600">月末締め請求</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">専門スタッフ</h4>
                  <p className="text-xs text-gray-600">福祉対応可能</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">ワンストップ</h4>
                  <p className="text-xs text-gray-600">清掃から搬入まで</p>
                </div>
              </div>
            </div>

            {/* 装飾的要素 */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-200/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHeroSection;