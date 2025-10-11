import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'リユース・地域連携｜再利用・寄付で"やさしい循環"を｜札幌',
  description: '家財整理で生じた品をリユース・リサイクルし、札幌の地域や福祉へ循環。社会福祉法人・地域団体・リサイクル業者と連携し、モノを次につなぐ活動を行っています。',
  robots: 'index,follow',
}

export default function ReusePage() {
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
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">リユース・地域連携</h1>
          <p className="text-xl">モノをつなぎ、地域を支える</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">サービス内容</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              まだ使える家具・家電・日用品を、廃棄するのではなく、次の方へつなぐ取り組みを行っています。
              環境に配慮し、地域社会への貢献を目指したリユース・リサイクル活動を推進しています。
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-emerald-700">再利用・再販</h3>
                <p className="text-gray-700 leading-relaxed">
                  整理作業で出た家具・家電・日用品の中から、まだ使用可能なものを査定し、
                  リサイクルショップや必要とされる方へお譲りします。
                  想いのこもった品々を無駄にせず、次の暮らしへとつなげます。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-emerald-700">寄付活動</h3>
                <p className="text-gray-700 leading-relaxed">
                  福祉施設や生活困窮者支援団体などへ、必要な物品を寄付する活動も行っています。
                  地域の中で支え合う仕組みづくりに貢献しています。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-emerald-700">地域企業・団体との協働</h3>
                <p className="text-gray-700 leading-relaxed">
                  地域のリサイクル業者、福祉団体、NPO法人などと連携し、
                  循環型社会の実現に向けた取り組みを推進しています。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">リユース可能な品目例</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-emerald-700">家具類</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• テーブル・椅子</li>
                  <li>• タンス・棚</li>
                  <li>• ベッド・寝具</li>
                  <li>• ソファ</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-emerald-700">家電製品</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 冷蔵庫・洗濯機</li>
                  <li>• 電子レンジ</li>
                  <li>• テレビ</li>
                  <li>• エアコン</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-emerald-700">日用品</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 食器類</li>
                  <li>• 調理器具</li>
                  <li>• 衣類</li>
                  <li>• 文房具・書籍</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-emerald-700">その他</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 自転車</li>
                  <li>• スポーツ用品</li>
                  <li>• 趣味・娯楽用品</li>
                  <li>• ※状態により判断</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">※品物の状態により、リユースが難しい場合もございます。まずはご相談ください。</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">環境と人にやさしい整理を</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              私たちは、単に「不用品を処分する」のではなく、
              「まだ使えるものを次の方へつなぐ」ことを大切にしています。
            </p>
            <div className="bg-emerald-50 p-6 rounded-lg mt-6">
              <h4 className="font-bold text-lg mb-3">リユースのメリット</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>処分費用の削減につながります</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>環境負荷の軽減に貢献できます</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>必要としている方に喜んでもらえます</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>地域の支え合いにつながります</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">地域連携の取り組み</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              私たちは、地域のリサイクル業者・福祉団体・NPO法人・行政などと連携し、
              循環型社会の実現に向けた活動を行っています。
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">福祉施設への寄付</h4>
                <p className="text-sm text-gray-600">生活困窮者支援施設や児童養護施設などへ、必要な物品を寄付</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">地域清掃活動</h4>
                <p className="text-sm text-gray-600">地域のボランティア清掃活動への参加・協力</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">リサイクル業者との連携</h4>
                <p className="text-sm text-gray-600">適切なリサイクルルートでの資源の再生</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-100 to-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">まずはお気軽にご相談ください</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0120-651-340" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition">
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
