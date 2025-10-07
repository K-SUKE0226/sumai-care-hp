import Link from 'next/link'

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
          <p className="text-xl">人の想いを大切に、心を込めた整理を</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">サービス内容</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-green-700">遺品整理・生前整理</h3>
                <p className="text-gray-700 leading-relaxed">
                  故人の想いや残されたご家族の気持ちに寄り添い、丁寧に遺品整理を行います。
                  生前整理では、ご本人の意思を尊重しながら、今後の生活をより良くするための整理をサポートします。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-green-700">特殊清掃</h3>
                <p className="text-gray-700 leading-relaxed">
                  長期間放置された住居や特殊な状況下での清掃作業を、専門知識と技術で対応します。
                  近隣への配慮も含め、プライバシーを守りながら作業を進めます。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-green-700">再生活用</h3>
                <p className="text-gray-700 leading-relaxed">
                  まだ使える家具・家電・日用品を、リユース・リサイクルを通じて次の方へつなぎます。
                  環境にも優しく、想いのこもった品々を無駄にしない取り組みを行っています。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">作業の流れ</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">お問い合わせ・ご相談</h4>
                  <p className="text-gray-600">お電話・LINE・フォームよりお気軽にご相談ください</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">現地調査・お見積り</h4>
                  <p className="text-gray-600">スタッフが訪問し、状況を確認後、お見積りを提示します（無料）</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">ご契約・作業日程調整</h4>
                  <p className="text-gray-600">ご納得いただけましたら、作業日を決定します</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">作業実施</h4>
                  <p className="text-gray-600">丁寧かつ迅速に整理・清掃作業を行います</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">完了確認・お支払い</h4>
                  <p className="text-gray-600">作業完了を確認いただき、お支払いとなります</p>
                </div>
              </div>
            </div>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">対応地域</h2>
            <p className="text-gray-700 mb-4">札幌市全区（中央区・北区・東区・白石区・豊平区・南区・西区・厚別区・手稲区・清田区）</p>
            <p className="text-gray-700">※近郊市町村も対応可能です。お気軽にご相談ください。</p>
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
          <h2 className="text-3xl font-bold mb-6 text-gray-800">まずはお気軽にご相談ください</h2>
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
