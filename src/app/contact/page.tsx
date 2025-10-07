'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここに送信処理を実装
    alert('お問い合わせを受け付けました。後ほど担当者よりご連絡させていただきます。')
    console.log(formData)
  }

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-xl">小さなことでもご相談ください</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* お問い合わせ方法 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">お問い合わせ方法</h2>
            <p className="text-center text-gray-700 mb-8">
              お電話・LINE・メールフォームから、お気軽にお問い合わせください。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="font-bold text-lg mb-2">お電話</h3>
                <p className="text-2xl font-bold text-green-700 mb-2">0120-651-340</p>
                <p className="text-sm text-gray-600">受付時間：9:00〜18:00<br />（年中無休）</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-bold text-lg mb-2">LINE相談</h3>
                <p className="text-sm text-gray-600 mb-4">LINEからもお気軽に<br />ご相談いただけます</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                  友だち追加
                </button>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="font-bold text-lg mb-2">メール</h3>
                <p className="text-sm text-gray-600 mb-2">hoshino@sumai-care.com</p>
                <p className="text-xs text-gray-500">下記フォームからも<br />送信できます</p>
              </div>
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">お問い合わせフォーム</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  お名前 <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="例：山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  電話番号 <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="例：090-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="例：example@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  ご相談内容 <span className="text-red-600">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="整理">住環境整理・生活支援</option>
                  <option value="紹介">住宅紹介・居住支援</option>
                  <option value="リユース">リユース・地域連携</option>
                  <option value="引越し">福祉に寄り添う引越し支援</option>
                  <option value="保管">福祉型保管サービス</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  お問い合わせ内容 <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="お困りごとやご質問など、詳しくお聞かせください"
                ></textarea>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="text-red-600">*</span> は必須項目です。<br />
                  お送りいただいた情報は、お問い合わせ対応のみに使用し、適切に管理いたします。
                </p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>

          {/* よくあるご質問 */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">よくあるご質問</h2>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Q. 見積もりは無料ですか？</h3>
                <p className="text-gray-700">A. はい、お見積もりは無料です。お気軽にご相談ください。</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Q. 急な対応は可能ですか？</h3>
                <p className="text-gray-700">A. 可能な限り柔軟に対応いたします。まずはご相談ください。</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Q. 生活保護を受給していますが利用できますか？</h3>
                <p className="text-gray-700">A. はい、生活保護受給者の方も多くご利用いただいております。ケースワーカーとも連携して対応いたします。</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Q. 遠方に住んでいても依頼できますか？</h3>
                <p className="text-gray-700">A. はい、立ち会い代行サービスもございますので、遠方の方でもご利用いただけます。</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Q. 支払い方法は？</h3>
                <p className="text-gray-700">A. 現金・銀行振込・クレジットカードに対応しております。詳しくはお問い合わせください。</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Q. ケアマネジャーや包括支援センターからの依頼も可能ですか？</h3>
                <p className="text-gray-700">A. はい、関係機関からのご依頼も多数承っております。お気軽にご相談ください。</p>
              </div>
            </div>
          </div>

          {/* アクセス */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">アクセス</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">株式会社スマイリード（運営：住まいサポートケア）</h3>
                <p className="text-gray-700 mb-2">
                  〒064-0807<br />
                  札幌市中央区南7条西2丁目2-10<br />
                  パラスト中島公園102号
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">TEL:</span> 0120-651-340<br />
                  <span className="font-semibold">MAIL:</span> hoshino@sumai-care.com
                </p>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Google Map</span>
              </div>
              <p className="text-sm text-gray-600">
                ※地下鉄南北線「中島公園駅」徒歩5分<br />
                ※お車でお越しの際は近隣のコインパーキングをご利用ください
              </p>
            </div>
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
