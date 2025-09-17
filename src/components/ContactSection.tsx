"use client";

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ここでフォームデータの送信処理を行う
    // 実際の実装では、APIエンドポイントに送信
    try {
      // シミュレーション
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage("お問い合わせありがとうございます。2営業日以内にご連絡いたします。");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch {
      setSubmitMessage("送信に失敗しました。お電話でお問い合わせください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            どんな小さなことでもお気軽にご相談ください。<br />
            お客様のご状況に合わせて最適なサービスをご提案いたします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* お問い合わせフォーム */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">メールでお問い合わせ</h3>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg text-accent">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  お電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  ご希望のサービス
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="">選択してください</option>
                  <option value="housing">高齢者住宅紹介</option>
                  <option value="moving">福祉に寄り添った引っ越し</option>
                  <option value="organizing">生前整頓・遺品整理</option>
                  <option value="recycling">中古家電販売・買取</option>
                  <option value="storage">荷物預かりサービス</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="ご相談内容やご質問をお聞かせください。どんな小さなことでもお気軽にお書きください。"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "送信中..." : "お問い合わせを送信"}
              </button>
            </form>
          </div>

          {/* 連絡先情報 */}
          <div className="space-y-8">
            {/* お電話でのお問い合わせ */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">お電話でのお問い合わせ</h3>
              <div className="text-center mb-6">
                <a
                  href="tel:0120-651-340"
                  className="inline-flex items-center space-x-4 text-4xl font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0120-651-340</span>
                </a>
              </div>
              <div className="space-y-3 text-center">
                <p className="text-lg"><strong>営業時間：9:00〜18:00</strong></p>
                <p className="text-gray-600">年中無休</p>
                <p className="text-sm text-gray-500">フリーダイヤルですので、お気軽にお電話ください</p>
              </div>
            </div>

            {/* 会社情報 */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">会社情報</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h-2M9 7h6m-6 4h6m-6 4h6" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">すまいケア</p>
                    <p className="text-gray-600">福祉に寄り添う総合サポート</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">サービス提供エリア</p>
                    <p className="text-gray-600">札幌市およびその周辺地域</p>
                    <p className="text-sm text-gray-500">※その他の地域もご相談ください</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">保険・許可</p>
                    <p className="text-gray-600">損害保険加入済み</p>
                    <p className="text-gray-600">一般貨物運送業許可取得</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;