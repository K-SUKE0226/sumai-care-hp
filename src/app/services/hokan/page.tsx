import Link from 'next/link'

export default function HokanPage() {
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
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">福祉型保管サービス</h1>
          <p className="text-xl">&ldquo;暮らしを止めない&rdquo;ための安心の保管体制</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">サービス内容</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              入院・退去・転居など、急な事情で荷物の置き場所に困った時のために、
              一時的に荷物をお預かりするサービスです。大型倉庫2拠点を完備し、
              福祉・医療関係者との連携により、柔軟な対応が可能です。
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-700">入院・退去に伴う一時保管</h3>
                <p className="text-gray-700 leading-relaxed">
                  急な入院で住居を引き払う必要がある場合や、
                  施設入所に伴い一時的に荷物を保管したい場合など、
                  短期〜長期まで柔軟に対応します。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-700">転居時の一時保管</h3>
                <p className="text-gray-700 leading-relaxed">
                  退去日と入居日にずれがある場合や、
                  新居が決まるまでの一時保管など、引越しに関わる保管ニーズに対応します。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-700">大型倉庫2拠点完備</h3>
                <p className="text-gray-700 leading-relaxed">
                  札幌市内に大型倉庫を2拠点完備しており、
                  大量の荷物や大型家具・家電もしっかりと保管できます。
                  温度管理・セキュリティ対策も万全です。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">こんな時にご利用ください</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 急な入院で住居を引き払う時</h4>
                <p className="text-sm text-gray-600">退院後の住まいが決まるまで荷物を保管</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 施設入所に伴う荷物整理</h4>
                <p className="text-sm text-gray-600">大切な想い出の品を安全に保管</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 退去日と入居日にずれがある時</h4>
                <p className="text-sm text-gray-600">数日〜数週間の短期保管にも対応</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 新居が決まるまでの一時保管</h4>
                <p className="text-sm text-gray-600">物件探しの間も荷物は安心</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 遺品整理後の保管</h4>
                <p className="text-sm text-gray-600">すぐに処分できない品々を一時保管</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ 生活再建までの保管</h4>
                <p className="text-sm text-gray-600">生活が安定するまでの長期保管も可能</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">保管の特徴</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">大型倉庫2拠点</h4>
                  <p className="text-gray-600">札幌市内に2つの大型倉庫を完備。大量の荷物も安心してお預けいただけます。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔒</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">セキュリティ万全</h4>
                  <p className="text-gray-600">施錠管理・防犯カメラ設置により、大切な荷物を安全に保管します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">適切な温度管理</h4>
                  <p className="text-gray-600">家具・家電が傷まないよう、温度・湿度を管理しています。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📦</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">搬入・搬出もサポート</h4>
                  <p className="text-gray-600">荷物の搬入・搬出作業も私たちが行いますので、お客様の負担はありません。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📅</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">柔軟な期間設定</h4>
                  <p className="text-gray-600">短期（数日）から長期（数ヶ月〜）まで、ご希望に応じて柔軟に対応します。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">料金の目安</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-4 py-3 text-left">荷物の量</th>
                    <th className="px-4 py-3 text-left">月額料金</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3">1K・1R 相当</td>
                    <td className="px-4 py-3">15,000円〜</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">1LDK・2DK 相当</td>
                    <td className="px-4 py-3">25,000円〜</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">2LDK・3DK 相当</td>
                    <td className="px-4 py-3">40,000円〜</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">3LDK以上</td>
                    <td className="px-4 py-3">60,000円〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">※荷物の量や保管期間により変動します。詳しくはお見積りをご依頼ください。</p>
            <p className="text-sm text-gray-600 mt-2">※搬入・搬出費用は別途かかります。</p>
          </div>

          <div className="bg-purple-50 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">ケアマネ・包括・行政との連携対応</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ケアマネジャー・地域包括支援センター・行政（ケースワーカー）・病院などと連携し、
              スムーズな保管サービスを提供しています。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              入院中の方、生活保護受給中の方、身寄りのない方など、
              様々な状況に応じて柔軟に対応いたします。
            </p>
            <div className="bg-white p-6 rounded-lg mt-6">
              <h4 className="font-bold text-lg mb-3">想いを預かり、再出発を支える</h4>
              <p className="text-gray-700 leading-relaxed">
                私たちは、単に荷物を預かるだけでなく、
                お客様の&ldquo;想い&rdquo;や&ldquo;暮らし&rdquo;を守り、再出発を支える気持ちで保管サービスを提供しています。
                大切な品々を、安心してお任せください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">まずはお気軽にご相談ください</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0120-651-340" className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
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
