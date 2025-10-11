import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '住まいサポートケア｜札幌の福祉型住環境支援｜株式会社スマイリード',
  description: '札幌で家財整理・住宅紹介・引越し支援・荷物保管を通じて、高齢者・障がい者・生活困窮者の暮らしを支える福祉型サービス。行政・包括・ケアマネジャーと連携し、安心の住環境を提供します。',
  robots: 'index,follow',
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            人と住まいに、まごころを。
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            整理・支援・住まい・保管・引越しを通じて、<br />
            &ldquo;暮らしの安心&rdquo;を支えるスマイリードグループ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
              無料相談する
            </Link>
            <Link href="#cases" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition">
              事例を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: About */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            スマイリード／住まいサポートケアとは
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed max-w-3xl mx-auto">
            法人名は「株式会社スマイリード」、ブランド名は「住まいサポートケア」として、
            札幌市を中心に福祉と住環境に関わる総合的な支援サービスを提供しています。
            私たちは、人の想いと暮らしを大切にし、地域社会に貢献することを使命としています。
          </p>
          <div className="text-center">
            <Link href="/company" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              理念ページへ
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: 5 Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            5つのサービス
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">住環境整理・生活支援</h3>
              <p className="text-gray-600 mb-6">
                家財整理・遺品整理・特殊清掃・再生活用
              </p>
              <Link href="/services/seikatsu-shien" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
                詳しく見る →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">住宅紹介・居住支援</h3>
              <p className="text-gray-600 mb-6">
                高齢者・障がい者・生活困窮者向けの住まい紹介支援
              </p>
              <Link href="/services/jutaku-shokai" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
                詳しく見る →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">リユース・地域連携</h3>
              <p className="text-gray-600 mb-6">
                不用品の再利用・リサイクル・地域協働活動
              </p>
              <Link href="/services/reuse" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
                詳しく見る →
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">福祉に寄り添う引越し支援</h3>
              <p className="text-gray-600 mb-6">
                生活保護・入院・送迎・荷造り支援・立ち会い代行対応
              </p>
              <Link href="/services/hikkoshi" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
                詳しく見る →
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-green-600">5</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">福祉型保管サービス</h3>
              <p className="text-gray-600 mb-6">
                大型倉庫2拠点／入院・転居・退去時の一時保管／ケアマネ連携対応
              </p>
              <Link href="/services/hokan" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
                詳しく見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cases */}
      <section id="cases" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            実績・事例紹介
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Before/After</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">札幌市中央区／1LDK</h3>
                <p className="text-gray-600">遺品整理＋引越し支援</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Before/After</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">札幌市北区／2LDK</h3>
                <p className="text-gray-600">家財整理＋特殊清掃</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Before/After</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">札幌市白石区／1K</h3>
                <p className="text-gray-600">生前整理＋保管サービス</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              もっと見る
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Network */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            連携ネットワーク
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            行政・包括支援センター・ケアマネジャー・医療機関・不動産会社・管理会社など、
            幅広い関係機関と連携し、&ldquo;つながりの安心&rdquo;を提供しています。
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-gray-800">行政・包括</h3>
              <p className="text-gray-600">地域包括支援センター・市区役所との連携</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-gray-800">医療・福祉</h3>
              <p className="text-gray-600">ケアマネジャー・病院・施設との協働</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-gray-800">不動産・管理</h3>
              <p className="text-gray-600">不動産業者・管理会社との連携体制</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Message */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            代表メッセージ
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
              <span className="text-gray-500">代表写真</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">代表取締役　常盤 和歩</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                私たちは、人の想いと住まいに真心を持って向き合い、
                暮らしに寄り添う支援を大切にしています。
                整理・住宅・引越し・保管という日常の困りごとを通じて、
                地域の皆様の&ldquo;安心な暮らし&rdquo;を支えることが私たちの使命です。
              </p>
              <Link href="/company" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                理念ページへ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            小さなことでもご相談ください
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            お電話・LINE・メールフォームから、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0120-651-340" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
              📞 0120-651-340
            </a>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              LINE で相談
            </Link>
            <Link href="/contact" className="bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition">
              フォームで相談
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">人と住まいに、まごころを。</h3>
            <p className="text-gray-400">株式会社スマイリード（運営：住まいサポートケア）</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <p className="mb-2">〒064-0807</p>
              <p className="mb-2">札幌市中央区南7条西2丁目2-10 パラスト中島公園102号</p>
              <p className="mb-2">TEL：0120-651-340</p>
              <p className="mb-2">MAIL：hoshino@sumai-care.com</p>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center">
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">SNS・LINE</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-green-400 transition">Facebook</a>
                  <a href="#" className="hover:text-green-400 transition">Instagram</a>
                  <a href="#" className="hover:text-green-400 transition">LINE</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 株式会社スマイリード All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
