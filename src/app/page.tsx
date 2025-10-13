import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '住まいサポートケア｜札幌の福祉型住環境支援｜株式会社スマイリード',
  description: '札幌で家財整理・住宅紹介・引越し支援・荷物保管を通じて、高齢者・障がい者・生活困窮者の暮らしを支える福祉型サービス。行政・包括・ケアマネジャーと連携し、安心の住環境を提供します。',
  robots: 'index,follow',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      {/* Hero Section - シンプル&コンパクト */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/gallery/さわやかスタッフ.jpeg')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-orange-600 font-semibold mb-4 text-lg">札幌の福祉型住環境支援</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              人と住まいに、<br />
              <span className="text-orange-600">まごころ</span>を。
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              整理・支援・住まい・保管・引越しを通じて、<br />
              <span className="font-semibold">&ldquo;暮らしの安心&rdquo;</span>を支えるスマイリードグループ。
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - メインコンテンツ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              私たちができること
            </h2>
            <p className="text-xl text-gray-600">5つのサービス</p>
          </div>

          {/* 2つの大きなサービス */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Service 1 */}
            <Link href="/services/seikatsu-shien" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200">
              <div className="relative h-80">
                <Image
                  src="/images/gallery/家財整理風景.jpeg"
                  alt="住環境整理・生活支援"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-orange-600 px-4 py-2 rounded-full text-sm font-bold">01</span>
                    <span className="text-sm opacity-90">家財整理・遺品整理</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">住環境整理・生活支援</h3>
                  <p className="text-base opacity-90 leading-relaxed">
                    特殊清掃・再生活用まで、心を込めた整理で&ldquo;暮らしの再生&rdquo;を支えます
                  </p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                <span className="text-orange-600 font-bold text-lg group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/services/jutaku-shokai" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
              <div className="relative h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-bold">02</span>
                    <span className="text-sm opacity-90">高齢者・障がい者支援</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">住宅紹介・居住支援</h3>
                  <p className="text-base opacity-90 leading-relaxed">
                    安心して暮らせる住まい探しを、福祉の視点でサポート
                  </p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                <span className="text-blue-600 font-bold text-lg group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          </div>

          {/* 3つの小さなサービス */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 3 */}
            <Link href="/services/reuse" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200">
              <div className="relative h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-green-600 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">03</span>
                  <h3 className="text-2xl font-bold mb-1">リユース・<br />地域連携</h3>
                  <p className="text-sm opacity-90">モノをつなぎ、地域を支える</p>
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50">
                <span className="text-green-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る →
                </span>
              </div>
            </Link>

            {/* Service 4 */}
            <Link href="/services/hikkoshi" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-200">
              <div className="relative h-56">
                <Image
                  src="/images/gallery/丁寧な搬入・搬出.jpeg"
                  alt="引越し支援"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-amber-600 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">04</span>
                  <h3 className="text-2xl font-bold mb-1">福祉に寄り添う<br />引越し支援</h3>
                  <p className="text-sm opacity-90">暮らしを整える引越し</p>
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50">
                <span className="text-amber-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る →
                </span>
              </div>
            </Link>

            {/* Service 5 */}
            <Link href="/services/hokan" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200">
              <div className="relative h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">05</span>
                  <h3 className="text-2xl font-bold mb-1">福祉型<br />保管サービス</h3>
                  <p className="text-sm opacity-90">大型倉庫2拠点完備</p>
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50">
                <span className="text-purple-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Message from CEO - コンパクトに */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-orange-100">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-5xl">👤</span>
              </div>
              <div className="flex-1">
                <p className="text-orange-600 font-semibold mb-2 text-sm">MESSAGE</p>
                <h3 className="text-3xl font-bold mb-3 text-gray-900">代表取締役　常盤 和歩</h3>
                <p className="text-lg text-gray-600 mb-6 italic font-semibold">&quot;損得ではなく、善悪で判断する。&quot;</p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    私たちは、目先の利益よりも、<strong>人としての正しさ</strong>を大切にします。
                  </p>
                  <p>
                    整理・住宅・引越し・保管という日常の困りごとを通じて、
                    地域の皆様の<strong>&ldquo;安心な暮らし&rdquo;</strong>を支えることが私たちの使命です。
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <Link href="/company" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all">
                    詳しい理念を見る <span>→</span>
                  </Link>
                  <Link href="/philosophy" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-semibold transition-all">
                    代表メッセージ <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Phone CTA Section */}
          <div className="text-center mb-12 pb-12 border-b border-gray-800">
            <p className="text-gray-400 mb-4 text-lg">まずはお気軽にご相談ください</p>
            <a
              href="tel:0120-651-340"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-rose-500 text-white px-12 py-5 rounded-full text-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="text-3xl">📞</span>
              <span>0120-651-340</span>
            </a>
            <p className="text-gray-400 text-sm mt-4">受付時間：平日 9:00〜18:00</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Tagline */}
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                人と住まいに、まごころを。
              </h3>
              <p className="text-gray-400 text-sm">株式会社スマイリード<br />（運営：住まいサポートケア）</p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-3 text-orange-400">お問い合わせ</h4>
              <p className="text-gray-300 text-sm mb-1">TEL：0120-651-340</p>
              <p className="text-gray-300 text-sm mb-1">MAIL：hoshino@sumai-care.com</p>
              <p className="text-gray-400 text-xs">〒064-0807 札幌市中央区南7条西2-2-10</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-3 text-orange-400">サイトマップ</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition">会社情報</Link>
                <Link href="/philosophy" className="text-gray-300 hover:text-orange-400 transition">理念</Link>
                <Link href="/network" className="text-gray-300 hover:text-orange-400 transition">連携</Link>
                <Link href="/gallery" className="text-gray-300 hover:text-orange-400 transition">実績</Link>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition">お問合せ</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 株式会社スマイリード All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
