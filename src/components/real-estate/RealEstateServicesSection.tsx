import Image from "next/image";

const RealEstateServicesSection = () => {
  const services = [
    {
      title: "退去後残置物撤去・清掃",
      description: "大型家具・家電から細かな私物まで、すべて撤去。リフォームまで請け負います。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      features: ["最短で前日対応可能", "家財の適正処理", "そのまま引き渡し可能な状態で完了します"],
    },
    {
      title: "入居者向け家電搬入サービス",
      description: "実家暮らしから一人暮らしの方、生活保護の方への中古家電販売・搬入・設置まで。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0" />
        </svg>
      ),
      features: ["動作確認済み中古家電", "適正価格での提供", "搬入・設置・説明まで"],
    },
    {
      title: "生活保護手続きサポート",
      description: "複雑な行政手続きを代行。入居に必要な書類準備から申請まで丁寧にサポートします。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      features: ["福祉事務所との連携", "必要書類の準備代行", "申請手続きサポート"],
    },
    {
      title: "入居前荷物整理・引っ越し",
      description: "前住居の荷物整理から新居への引っ越しまで。必要・不要の仕分けもお任せください。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      features: ["丁寧な荷物仕分け", "不用品の適正処分", "新居での配置サポート"],
    },
    {
      title: "送迎サポートサービス",
      description: "高齢者、障害者の方の前住居から新居への送迎。ご家族の負担を大幅に軽減します。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      features: ["安心・安全な送迎", "丁寧なサポート対応", "予定外の対応可能"],
    },
    {
      title: "特殊清掃サービス",
      description: "孤独死や事故物件の特殊清掃に対応。消臭処理から原状回復まで専門技術で完全復旧いたします。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["特殊清掃専門技術", "消臭・除菌処理", "原状回復工事"],
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">すまいケアの</span>不動産会社様向けサービス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            退去から入居まで、すべての工程をワンストップでサポート。<br />
            複数業者への依頼は不要です。
          </p>
        </div>

        {/* サービス一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              {/* サービス写真 */}
              <div className="aspect-[16/10] bg-gray-200 relative">
                <Image
                  src={[
                    "/images/gallery/家財撤去後の清掃.JPG",
                    "/images/gallery/丁寧な搬入・搬出.jpeg",
                    "/images/gallery/適正な家財処分風景.jpeg",
                    "/images/gallery/家財整理風景.jpeg",
                    "/images/gallery/さわやかスタッフ.jpeg",
                    "/images/gallery/特殊清掃.jpeg"
                  ][index]}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* 写真上のタイトルオーバーレイ */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">{service.title}</p>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* 特徴リスト */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-white rounded-3xl shadow-xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            ワンストップで<span className="text-primary">すべて解決</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            複数業者との煩雑なやり取りは不要。すまいケア1社で<br />
            退去から入居まですべての課題を解決いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0120-651-340"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>お電話でご相談</span>
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <span>サービス資料請求</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateServicesSection;