import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '住まいサポートケア｜札幌の福祉型住環境支援｜株式会社スマイリード',
  description: '札幌で家財整理・住宅紹介・引越し支援・荷物保管を通じて、高齢者・障がい者・生活困窮者の暮らしを支える福祉型サービス。行政・包括・ケアマネジャーと連携し、安心の住環境を提供します。',
  robots: 'index,follow',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Section - 温かみのある */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/gallery/さわやかスタッフ.jpeg')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-orange-600 font-semibold mb-4 text-lg">札幌の福祉型住環境支援</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              人と住まいに、<br />
              <span className="text-orange-600">まごころ</span>を。
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              整理・支援・住まい・保管・引越しを通じて、<br />
              <span className="font-semibold">&ldquo;暮らしの安心&rdquo;</span>を支えるスマイリードグループ。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl">
                無料相談する
              </Link>
              <Link href="#philosophy" className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-orange-600 hover:bg-orange-50 transition">
                私たちの想い
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - 理念 */}
      <section id="philosophy" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold mb-2">OUR PHILOSOPHY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              損得ではなく、<span className="text-orange-600">善悪</span>で判断する。
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              私たちは、目先の利益よりも、<strong>人としての正しさ</strong>を大切にします。<br />
              一人ひとりの尊厳と暮らしを守り、誰もが安心して暮らせる社会をつくることが、私たちの使命です。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">誠実</h3>
              <p className="text-gray-700 leading-relaxed">
                損得ではなく善悪で判断し、約束を守り、責任を持って業務を遂行します。
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">寄り添い</h3>
              <p className="text-gray-700 leading-relaxed">
                一人ひとりの状況に応じた、きめ細やかな支援を大切にします。
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">感謝</h3>
              <p className="text-gray-700 leading-relaxed">
                すべてのご縁に感謝し、謙虚な姿勢で学び続けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 実際の写真付き */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold mb-2">OUR SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              5つのサービス
            </h2>
            <p className="text-xl text-gray-600">私たちができること</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Service 1 */}
            <Link href="/services/seikatsu-shien" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/images/gallery/家財整理風景.jpeg"
                  alt="住環境整理・生活支援"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">01</span>
                  <h3 className="text-2xl font-bold mb-2">住環境整理・生活支援</h3>
                  <p className="text-sm opacity-90">家財整理・遺品整理・特殊清掃・再生活用</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  人の想いを大切に、心を込めた整理で&ldquo;暮らしの再生&rdquo;を支えます。
                </p>
                <span className="text-orange-600 font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/services/jutaku-shokai" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">02</span>
                  <h3 className="text-2xl font-bold mb-2">住宅紹介・居住支援</h3>
                  <p className="text-sm opacity-90">高齢者・障がい者・生活困窮者向け</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  安心して暮らせる住まい探しを、福祉の視点でサポートします。
                </p>
                <span className="text-blue-600 font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 3 */}
            <Link href="/services/reuse" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className="bg-green-600 px-3 py-1 rounded-full text-xs font-semibold mb-1 inline-block">03</span>
                  <h3 className="text-xl font-bold">リユース・地域連携</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">モノをつなぎ、地域を支える</p>
                <span className="text-green-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る →
                </span>
              </div>
            </Link>

            {/* Service 4 */}
            <Link href="/services/hikkoshi" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/gallery/丁寧な搬入・搬出.jpeg"
                  alt="引越し支援"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className="bg-amber-600 px-3 py-1 rounded-full text-xs font-semibold mb-1 inline-block">04</span>
                  <h3 className="text-xl font-bold">福祉に寄り添う引越し支援</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">運ぶだけでなく、暮らしを整える</p>
                <span className="text-amber-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る →
                </span>
              </div>
            </Link>

            {/* Service 5 */}
            <Link href="/services/hokan" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-semibold mb-1 inline-block">05</span>
                  <h3 className="text-xl font-bold">福祉型保管サービス</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">大型倉庫2拠点・一時預かり</p>
                <span className="text-purple-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  詳しく見る →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Real Work Photos Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold mb-2">OUR WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              実際の作業風景
            </h2>
            <p className="text-xl text-gray-600">一つひとつの作業に、真心を込めて</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Image src="/images/gallery/家財整理風景 (2).jpeg" alt="家財整理" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Image src="/images/gallery/丁寧な搬入・搬出 (4).jpeg" alt="搬入搬出" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Image src="/images/gallery/特殊清掃.jpeg" alt="特殊清掃" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Image src="/images/gallery/さわやかスタッフ.jpeg" alt="スタッフ" fill className="object-cover hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Connection & Network */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold mb-2">NETWORK</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              &ldquo;つながりの安心&rdquo;を提供
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              行政・包括支援センター・ケアマネジャー・医療機関・不動産会社・管理会社など、<br />
              幅広い関係機関と密に連携し、地域全体で支え合う仕組みをつくります。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">行政・包括</h3>
              <p className="text-gray-600">地域包括支援センター・市区役所との連携</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">医療・福祉</h3>
              <p className="text-gray-600">ケアマネジャー・病院・施設との協働</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">不動産・管理</h3>
              <p className="text-gray-600">不動産業者・管理会社との連携体制</p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-600 font-semibold mb-2">MESSAGE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">代表メッセージ</h2>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">代表取締役　常盤 和歩</h3>
                <p className="text-gray-600 mb-6 italic">&quot;損得ではなく、善悪で判断する。&quot;</p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    私たちは、目先の利益よりも、<strong>人としての正しさ</strong>を大切にします。
                  </p>
                  <p>
                    整理・住宅・引越し・保管という日常の困りごとを通じて、
                    地域の皆様の<strong>&ldquo;安心な暮らし&rdquo;</strong>を支えることが私たちの使命です。
                  </p>
                  <p>
                    これからも、人の想いと暮らしを大切にし、<strong>&ldquo;まごころ&rdquo;</strong>を持って地域社会に貢献してまいります。
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/company" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all">
                    詳しい理念を見る <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            小さなことでも、<br />お気軽にご相談ください
          </h2>
          <p className="text-xl mb-8 opacity-90">
            お電話・LINE・メールフォームから、いつでもお問い合わせいただけます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0120-651-340" className="bg-white text-orange-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
              📞 0120-651-340
            </a>
            <Link href="/contact" className="bg-blue-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-600 transition shadow-lg hover:shadow-xl">
              LINE で相談
            </Link>
            <Link href="/contact" className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition">
              メールで相談
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
              人と住まいに、まごころを。
            </h3>
            <p className="text-gray-400">株式会社スマイリード（運営：住まいサポートケア）</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left mb-8">
            <div>
              <p className="mb-2 text-gray-300">〒064-0807</p>
              <p className="mb-2 text-gray-300">札幌市中央区南7条西2丁目2-10</p>
              <p className="mb-2 text-gray-300">パラスト中島公園102号</p>
              <p className="mb-2 text-gray-300">TEL：0120-651-340</p>
              <p className="text-gray-300">MAIL：hoshino@sumai-care.com</p>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center">
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-3">SNS・LINE</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-orange-400 transition">Facebook</a>
                  <a href="#" className="hover:text-orange-400 transition">Instagram</a>
                  <a href="#" className="hover:text-orange-400 transition">LINE</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 株式会社スマイリード All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
