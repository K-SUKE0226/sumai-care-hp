import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '住宅紹介・居住支援｜高齢者・障がい者・生活困窮者の住まい探し｜札幌',
  description: '札幌で高齢者・障がい者・生活困窮者の住まい探しを支援。入居前相談・見学同行・入居後フォローまで一貫対応。居住支援法人・包括・ケアマネジャー・医療・不動産と連携。',
  robots: 'index,follow',
}

export default function JutakuShokaiPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">住宅紹介・居住支援</h1>
          <p className="text-xl">安心して暮らせる住まい探しをサポート</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">サービス内容</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              高齢者・障がい者・生活困窮者など、住まい探しに困難を抱える方々に対して、
              安心して暮らせる住宅の紹介と入居後のサポートを行います。
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">高齢者向け住宅紹介</h3>
                <p className="text-gray-700 leading-relaxed">
                  バリアフリー物件や見守りサービス付き住宅など、高齢者の方が安心して暮らせる住まいをご紹介します。
                  ケアマネジャーや地域包括支援センターとも連携し、最適な住環境をご提案します。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">障がい者向け住宅支援</h3>
                <p className="text-gray-700 leading-relaxed">
                  身体的・精神的な障がいをお持ちの方が、自立した生活を送れるよう、
                  適切な住宅の紹介と入居後のフォローを行います。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">生活困窮者への居住支援</h3>
                <p className="text-gray-700 leading-relaxed">
                  生活保護受給者や経済的な困難を抱える方に対して、
                  入居可能な物件の紹介や、行政との連携によるサポートを提供します。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">支援の流れ</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">入居前相談</h4>
                  <p className="text-gray-600">ご希望の条件や現在の状況をヒアリングします</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">物件のご紹介</h4>
                  <p className="text-gray-600">条件に合った物件を複数ご提案します</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">見学同行</h4>
                  <p className="text-gray-600">実際の物件をスタッフと一緒に見学します</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">入居手続き支援</h4>
                  <p className="text-gray-600">契約書類の作成や手続きをサポートします</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">アフターフォロー</h4>
                  <p className="text-gray-600">入居後の生活相談や困りごとにも対応します</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">包括・ケアマネ・不動産業者との連携</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              地域包括支援センター、ケアマネジャー、不動産業者、管理会社など、
              多様な関係機関と密に連携し、スムーズな住まい探しと入居をサポートします。
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">地域包括・ケアマネ</h4>
                <p className="text-sm text-gray-600">生活状況に応じた住まいの提案</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">不動産業者</h4>
                <p className="text-sm text-gray-600">豊富な物件情報の提供</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">行政機関</h4>
                <p className="text-sm text-gray-600">生活保護等の制度活用支援</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">こんな方におすすめです</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>高齢で物件探しが難しい方</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>身体的・精神的な障がいをお持ちの方</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>生活保護を受給されている方</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>保証人を立てることが難しい方</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>入院中で退院後の住まいをお探しの方</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>施設からの退所後の住まいをお探しの方</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">まずはお気軽にご相談ください</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0120-651-340" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
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
