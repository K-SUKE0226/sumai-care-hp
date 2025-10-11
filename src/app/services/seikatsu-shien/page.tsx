import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '住環境整理・生活支援｜家財整理・遺品整理・再生活用｜札幌の住まいサポートケア',
  description: '札幌で家財整理・遺品整理・生前整理・住環境の清掃や消臭まで、誠実に対応。行政・包括・管理会社とも連携できる安心の体制。住まいの再生活用やリユースにも取り組む住まいサポートケア。',
  robots: 'index,follow',
}

export default function SeikatsuShienPage() {
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
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">住環境整理・生活支援</h1>
          <p className="text-xl">人の想いを大切に、心を込めた整理で&ldquo;暮らしの再生&rdquo;を支えます。</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">誠実な家財整理・遺品整理を札幌中心に対応</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              住まいサポートケアは、札幌市を中心に<strong>家財整理・遺品整理・生前整理・清掃・消臭</strong>まで一貫対応。状況とご事情に合わせた最適な計画で、丁寧に作業します。
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-green-700">主な対応内容</h3>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>遺品整理・生前整理・空き家整理</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>清掃・消臭・除菌など住環境改善</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>再利用・寄付・リサイクルによる再生活用</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>行政・包括支援センター・管理会社からのご依頼に対応</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">作業の流れ・費用の目安</h2>
            <ol className="space-y-3 mb-6 text-gray-700 list-decimal list-inside">
              <li><strong>ご相談・現地/オンライン見積</strong></li>
              <li><strong>お見積り・作業計画のご提案</strong></li>
              <li><strong>仕分け・搬出・清掃・再生活用</strong></li>
              <li><strong>最終確認・完了報告</strong></li>
            </ol>
            <p className="text-gray-600">規模・間取り・作業難易度によって変動します。詳細は無料でお見積りいたします。</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">費用の目安</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-4 py-3 text-left">間取り</th>
                    <th className="px-4 py-3 text-left">目安料金</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3">1K・1R</td>
                    <td className="px-4 py-3">50,000円〜</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">1LDK・2DK</td>
                    <td className="px-4 py-3">100,000円〜</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">2LDK・3DK</td>
                    <td className="px-4 py-3">180,000円〜</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">3LDK以上</td>
                    <td className="px-4 py-3">250,000円〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">※荷物の量や作業内容により変動します。詳しくはお見積りをご依頼ください。</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">対応エリア</h2>
            <p className="text-gray-700 mb-2"><strong>札幌市全域</strong>／道内各地</p>
            <p className="text-gray-600 text-sm">小樽・千歳・苫小牧・旭川・帯広・函館 ほか</p>
          </div>

          <div className="bg-green-50 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">行政・管理会社からの依頼にも対応</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              地域包括支援センター・ケアマネジャー・不動産管理会社・行政機関からのご依頼も多数承っております。
              福祉的な視点を持ったスタッフが、関係者の皆様と連携しながら、丁寧に対応いたします。
            </p>
            <p className="text-gray-700 leading-relaxed">
              生活保護受給者の方や、身寄りのない方への支援実績も豊富にございます。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">まずは無料相談</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0120-651-340" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
              📞 0120-651-340
            </a>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              LINE相談可
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
