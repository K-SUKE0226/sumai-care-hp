import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '福祉に寄り添う引越し支援｜荷造り・送迎・立ち会い・行政書類まで｜札幌',
  description: '札幌で支援型の引越し。高齢者・障がい者・生活保護・身寄りのない方にも対応。荷造り・荷解き・送迎・退去立ち会い・介護タクシー手配・Zoom見積までワンストップで支援します。',
  robots: 'index,follow',
}

export default function HikkoshiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-green-600 hover:text-green-700 font-semibold">
            ← トップページに戻る
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">福祉に寄り添う引越し支援</h1>
          <p className="text-xl">運ぶだけでなく、暮らしを整える引越しを</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">サービス内容</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              一般的な引越し業者では対応が難しい、福祉的な配慮が必要な引越しをサポートします。
              荷造りから荷解き、行政手続きまで、トータルでお手伝いします。
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-orange-700">荷造り・荷解き支援</h3>
                <p className="text-gray-700 leading-relaxed">
                  体力的・精神的に荷造りが困難な方のために、丁寧に荷物の梱包・開梱を行います。
                  必要なものと不要なものの仕分けから、新居での配置までサポートします。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-orange-700">送迎・立ち会い代行</h3>
                <p className="text-gray-700 leading-relaxed">
                  入院中や遠方にお住まいで立ち会いが難しい方のために、
                  引越し当日の立ち会い代行や、必要に応じた送迎サービスを提供します。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-orange-700">行政書類対応</h3>
                <p className="text-gray-700 leading-relaxed">
                  転居届や各種住所変更など、引越しに伴う行政手続きのサポートも行います。
                  生活保護受給者の方の移管手続きなども、ケースワーカーと連携して対応します。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">こんな方におすすめです</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 生活保護受給者の方</h4>
                <p className="text-sm text-gray-600">行政との連携により、スムーズな引越しをサポート</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 入院中の方</h4>
                <p className="text-sm text-gray-600">立ち会い不要で引越しを代行</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 高齢者の方</h4>
                <p className="text-sm text-gray-600">荷造りから荷解きまで全面サポート</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 障がいをお持ちの方</h4>
                <p className="text-sm text-gray-600">身体的負担を最小限に配慮した引越し</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 遠方にお住まいの方</h4>
                <p className="text-sm text-gray-600">現地に行けなくても安心の代行サービス</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 施設からの退所後</h4>
                <p className="text-sm text-gray-600">新生活のスタートを全面支援</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">サポート体制</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-700">ヘルパー経験者在籍</h3>
                <p className="text-gray-700 leading-relaxed">
                  介護ヘルパーの経験を持つスタッフが在籍しており、
                  高齢者や障がい者の方への適切な配慮とサポートが可能です。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-700">介護タクシー手配対応</h3>
                <p className="text-gray-700 leading-relaxed">
                  車椅子が必要な方や、介護が必要な方のために、
                  介護タクシーの手配も承っております。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-700">柔軟な対応</h3>
                <p className="text-gray-700 leading-relaxed">
                  生活保護受給中の方、入院中の方、遠方にお住まいの方など、
                  様々な状況に応じて柔軟に対応いたします。まずはご相談ください。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">引越しの流れ</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">お問い合わせ・ご相談</h4>
                  <p className="text-gray-600">引越しの時期や状況をお聞かせください</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">訪問見積もり</h4>
                  <p className="text-gray-600">荷物の量や必要なサポートを確認し、お見積りを提示（無料）</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">日程調整・準備</h4>
                  <p className="text-gray-600">引越し日を決定し、必要な手配を進めます</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">荷造り・引越し実施</h4>
                  <p className="text-gray-600">荷物の梱包から搬出・搬入まで丁寧に行います</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">荷解き・生活立ち上げ</h4>
                  <p className="text-gray-600">新居での荷解きや配置、生活のスタートをサポート</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">アフターフォロー</h4>
                  <p className="text-gray-600">引越し後の困りごとにも対応します</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">関係機関との連携</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ケースワーカー・ケアマネジャー・地域包括支援センター・医療機関など、
              関係者の皆様と密に連携し、スムーズな引越しをサポートします。
            </p>
            <p className="text-gray-700 leading-relaxed">
              生活保護の移管手続きや、医療・福祉サービスの継続など、
              引越しに伴う様々な手続きもお手伝いいたします。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">まずはお気軽にご相談ください</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0120-651-340" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
              📞 0120-651-340
            </a>
            <Link href="/contact" className="bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition">
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 株式会社スマイリード All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
