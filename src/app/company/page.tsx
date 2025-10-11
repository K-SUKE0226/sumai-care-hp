import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会社情報・理念｜株式会社スマイリード／住まいサポートケア｜札幌',
  description: '株式会社スマイリード（屋号：住まいサポートケア）の会社概要・代表挨拶・経営理念をご紹介。北海道の暮らしを支える"福祉型まちづくり企業"として、整理・支援・住まい・保管・引越しを提供。',
  robots: 'index,follow',
}

export default function CompanyPage() {
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
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">会社概要・理念</h1>
          <p className="text-xl">人と住まいに、まごころを。</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 代表挨拶 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">代表挨拶</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-48 h-48 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-gray-500">代表写真</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">代表取締役　常盤 和歩</h3>
                <p className="text-gray-600">Kazuho Tokiwa</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                私たち株式会社スマイリード（運営：住まいサポートケア）は、
                「人と住まいに、まごころを。」という理念のもと、
                札幌市を中心に福祉と住環境に関わる総合的な支援サービスを提供しています。
              </p>
              <p>
                整理・住宅紹介・引越し・保管という、日常生活における様々な困りごとに対して、
                福祉的な視点を持ちながら、一人ひとりに寄り添った支援を大切にしています。
              </p>
              <p>
                高齢者、障がい者、生活困窮者など、支援を必要とされる方々が、
                安心して暮らせる住環境を整えることが、私たちの使命です。
              </p>
              <p>
                地域包括支援センター、ケアマネジャー、行政、医療機関、不動産業者など、
                多様な関係機関と連携しながら、地域全体で支え合う仕組みづくりに貢献してまいります。
              </p>
              <p>
                これからも、人の想いと暮らしを大切にし、
                「まごころ」を持って地域社会に貢献していく所存です。
              </p>
            </div>
          </div>

          {/* 経営理念 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">経営理念</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-xl text-center font-bold text-gray-800 leading-relaxed">
                人と住まいに、まごころを。<br />
                暮らしの安心を支え、地域とともに歩む。
              </p>
            </div>
          </div>

          {/* ビジョン */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">ビジョン</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-800">福祉と住環境の架け橋となる</h3>
                <p className="text-gray-700 leading-relaxed">
                  住まいに困難を抱える方々に対して、福祉的な視点を持った支援を提供し、
                  安心して暮らせる住環境を実現します。
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-800">地域で支え合う仕組みをつくる</h3>
                <p className="text-gray-700 leading-relaxed">
                  行政・医療・福祉・不動産など、多様な関係機関と連携し、
                  地域全体で支え合うネットワークを構築します。
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-800">持続可能な社会に貢献する</h3>
                <p className="text-gray-700 leading-relaxed">
                  リユース・リサイクル活動を通じて環境に配慮し、
                  循環型社会の実現に貢献します。
                </p>
              </div>
            </div>
          </div>

          {/* ミッション */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">ミッション</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <p className="text-gray-700 leading-relaxed">
                  整理・住宅紹介・引越し・保管を通じて、暮らしの困りごとを解決します
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <p className="text-gray-700 leading-relaxed">
                  福祉的な視点を持ち、一人ひとりに寄り添った支援を提供します
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <p className="text-gray-700 leading-relaxed">
                  関係機関と連携し、スムーズで安心なサービスを実現します
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <p className="text-gray-700 leading-relaxed">
                  地域社会の一員として、誠実に、真心を持って行動します
                </p>
              </div>
            </div>
          </div>

          {/* バリュー */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">バリュー（行動指針）</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-800">まごころ</h3>
                <p className="text-gray-600">人の想いと暮らしを大切にし、真心を持って向き合います</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-800">寄り添い</h3>
                <p className="text-gray-600">一人ひとりの状況に応じた、きめ細やかな支援を提供します</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-800">連携</h3>
                <p className="text-gray-600">多様な関係機関と協力し、最適な解決策を提供します</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-800">誠実</h3>
                <p className="text-gray-600">約束を守り、責任を持って業務を遂行します</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-800">継続</h3>
                <p className="text-gray-600">一度きりの支援ではなく、継続的なフォローを大切にします</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-800">成長</h3>
                <p className="text-gray-600">常に学び、より良いサービスを追求し続けます</p>
              </div>
            </div>
          </div>

          {/* 会社概要 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">会社概要</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold text-gray-700">会社名</div>
                <div className="col-span-2 text-gray-700">株式会社スマイリード</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold text-gray-700">ブランド名</div>
                <div className="col-span-2 text-gray-700">住まいサポートケア</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold text-gray-700">代表取締役</div>
                <div className="col-span-2 text-gray-700">常盤 和歩</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold text-gray-700">所在地</div>
                <div className="col-span-2 text-gray-700">
                  〒064-0807<br />
                  札幌市中央区南7条西2丁目2-10<br />
                  パラスト中島公園102号
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold text-gray-700">電話番号</div>
                <div className="col-span-2 text-gray-700">0120-651-340</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold text-gray-700">メール</div>
                <div className="col-span-2 text-gray-700">hoshino@sumai-care.com</div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <div className="font-bold text-gray-700">事業内容</div>
                <div className="col-span-2 text-gray-700">
                  ・住環境整理・生活支援<br />
                  ・住宅紹介・居住支援<br />
                  ・リユース・地域連携<br />
                  ・福祉に寄り添う引越し支援<br />
                  ・福祉型保管サービス
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="font-bold text-gray-700">許認可</div>
                <div className="col-span-2 text-gray-700">
                  古物商許可証<br />
                  一般貨物自動車運送事業許可<br />
                  ※各種許認可取得済み
                </div>
              </div>
            </div>
          </div>

          {/* 沿革 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">沿革</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="font-bold text-green-700 w-24 flex-shrink-0">2020年</div>
                <div className="text-gray-700">株式会社スマイリード設立</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-green-700 w-24 flex-shrink-0">2021年</div>
                <div className="text-gray-700">住環境整理・生活支援事業開始</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-green-700 w-24 flex-shrink-0">2022年</div>
                <div className="text-gray-700">住宅紹介・居住支援事業開始<br />大型倉庫1拠点目開設</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-green-700 w-24 flex-shrink-0">2023年</div>
                <div className="text-gray-700">リユース・地域連携活動本格化<br />大型倉庫2拠点目開設</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-green-700 w-24 flex-shrink-0">2024年</div>
                <div className="text-gray-700">福祉に寄り添う引越し支援・福祉型保管サービス展開<br />地域連携ネットワーク強化</div>
              </div>
            </div>
          </div>

          {/* 採用情報 */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">採用・パートナー募集情報</h2>
            <p className="text-gray-700 text-center leading-relaxed mb-6">
              私たちと一緒に、地域の暮らしを支える仕事をしませんか？<br />
              スタッフ採用・協力業者様も随時募集しております。
            </p>
            <div className="text-center">
              <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                お問い合わせはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">サービスに関するご相談はこちら</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0120-651-340" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
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
