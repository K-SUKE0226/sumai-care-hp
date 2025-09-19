const RealEstatePricingSection = () => {
  const pricingTiers = [
    {
      name: "基本パック",
      description: "退去後の残置物撤去・清掃",
      price: "50,000円〜",
      unit: "1K・1DK",
      features: [
        "残置物の撤去・処分",
        "ハウスクリーニング",
        "写真付き報告書",
        "迅速着手対応",
        "リサイクル品の適正処理"
      ],
      suitable: "通常の退去案件",
      popular: false
    },
    {
      name: "フルサポートパック",
      description: "退去〜入居まで全工程対応",
      price: "120,000円〜",
      unit: "1K・1DK",
      features: [
        "残置物撤去・ハウスクリーニング",
        "入居者向け家電搬入サービス",
        "生活保護手続きサポート",
        "送迎サービス",
        "オーナー様直接報告",
        "迅速対応サービス"
      ],
      suitable: "生活保護・高齢者入居",
      popular: true
    },
    {
      name: "特殊清掃パック",
      description: "孤独死・特殊清掃対応",
      price: "200,000円〜",
      unit: "案件により変動",
      features: [
        "特殊清掃・消臭処理",
        "原状回復工事",
        "専門技術による完全復旧",
        "近隣対応サポート",
        "保険対応サポート",
        "完全秘匿対応"
      ],
      suitable: "特殊清掃案件",
      popular: false
    }
  ];

  const additionalServices = [
    { service: "送迎サービス", price: "5,000円〜/回", note: "札幌市内" },
    { service: "家電搬入・設置", price: "3,000円〜/台", note: "階段料金別途" },
    { service: "行政手続き代行", price: "15,000円〜", note: "生活保護申請等" },
    { service: "オーナー様立会い代行", price: "8,000円〜/回", note: "平日・休日同額" },
    { service: "特殊清掃追加オプション", price: "+50,000円〜", note: "案件内容により変動" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">透明性の高い</span>料金体系
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            法人様向けの明確な料金設定。月末締め請求で経理業務もスムーズです。<br />
            お見積りは無料で承っております。
          </p>
        </div>

        {/* 料金プラン */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-3xl shadow-xl overflow-hidden ${
                tier.popular
                  ? 'bg-primary text-white ring-4 ring-primary/20 scale-105'
                  : 'bg-white'
              }`}
            >
              {tier.popular && (
                <div className="bg-accent text-white text-center py-2 font-bold text-sm">
                  🔥 不動産会社様に人気
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-4 ${tier.popular ? 'text-white/90' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                  <div className={`text-4xl font-bold mb-1 ${tier.popular ? 'text-white' : 'text-primary'}`}>
                    {tier.price}
                  </div>
                  <div className={`text-sm ${tier.popular ? 'text-white/80' : 'text-gray-500'}`}>
                    {tier.unit}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          tier.popular ? 'text-white' : 'text-green-500'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${tier.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className={`text-center p-4 rounded-xl mb-6 ${
                  tier.popular ? 'bg-white/20' : 'bg-primary/5'
                }`}>
                  <p className={`text-sm font-semibold ${
                    tier.popular ? 'text-white' : 'text-primary'
                  }`}>
                    👥 こんな案件におすすめ
                  </p>
                  <p className={`text-sm ${tier.popular ? 'text-white/90' : 'text-gray-700'}`}>
                    {tier.suitable}
                  </p>
                </div>

                <button className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                  tier.popular
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}>
                  お見積り依頼
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 追加サービス料金 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            追加サービス料金
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-semibold text-gray-900">{item.service}</div>
                  <div className="text-sm text-gray-600">{item.note}</div>
                </div>
                <div className="font-bold text-primary">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 支払い条件 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 支払い条件 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              お支払い条件
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">支払い方法</span>
                <span className="font-semibold">銀行振込・現金</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">請求サイクル</span>
                <span className="font-semibold">月末締め翌月払い</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">振込手数料</span>
                <span className="font-semibold">お客様負担</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">緊急対応</span>
                <span className="font-semibold">追加料金30%</span>
              </div>
            </div>
          </div>

          {/* 対応エリア */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              対応エリア
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                <span className="font-semibold">札幌市内全域</span>
                <span className="ml-auto text-sm text-gray-600">基本料金</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                <span>石狩市・北広島市・恵庭市</span>
                <span className="ml-auto text-sm text-gray-600">交通費別途</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                <span>その他近郊</span>
                <span className="ml-auto text-sm text-gray-600">要相談</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-primary rounded-3xl text-white p-12">
          <h3 className="text-3xl font-bold mb-6">
            まずは無料お見積りから
          </h3>
          <p className="text-lg mb-8 opacity-90">
            現地確認・お見積りは無料です。<br />
            お気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0120-651-340"
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0120-651-340</span>
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors font-semibold text-lg"
            >
              メールで見積り依頼
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstatePricingSection;