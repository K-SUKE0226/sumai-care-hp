import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      title: "高齢者住宅紹介",
      description: "お客様のご希望とご予算に合わせて、最適な高齢者向け住宅をご紹介いたします。施設見学から入居まで丁寧にサポートします。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: ["無料相談", "施設見学同行", "入居手続きサポート"]
    },
    {
      title: "福祉に寄り添った引っ越し",
      description: "要支援の方の特別なニーズに配慮した引っ越しサービス。介護施設間の引っ越しも専門スタッフが安全に行います。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      features: ["介護用品の取り扱い", "バリアフリー対応", "引っ越し後清掃・管理会社立会い代行"]
    },
    {
      title: "生前整頓・遺品整理",
      description: "ご家族の大切な思い出を丁寧に整理いたします。必要なものと不要なものの仕分けから処分まで一貫してサポート。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: ["思い出の品の丁寧な取り扱い", "必要書類の分別", "供養サービス連携"]
    },
    {
      title: "中古家電販売・買取",
      description: "良質な中古家電の販売と買取を行っております。必要な家電を適正価格でお客様にご提供いたします。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ["適正価格での買取・販売", "動作確認済み中古家電", "運搬・設置サービス"]
    },
    {
      title: "荷物預かりサービス",
      description: "施設から長期入院になった際など、次の施設が決まるまでの荷物を自社倉庫で安全に保管いたします。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H15a2 2 0 012 2v0M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m0 0V6a2 2 0 00-2-2H9.414a1 1 0 00-.707.293L7.293 5.707A1 1 0 006.586 6H5a2 2 0 00-2 2v0" />
        </svg>
      ),
      features: ["24時間監視の自社倉庫", "温湿度管理", "必要時の即日配送"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">私たちのサービス</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            要支援の方とご家族のさまざまなニーズにお応えする専門サービスをご提供しています。
            どのようなご相談でもお気軽にお声かけください。
          </p>
        </div>

        {/* サービス一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              {/* サービス写真 */}
              <div className="aspect-[16/10] bg-gray-200 relative">
                {index === 0 && (
                  <Image
                    src="/images/gallery/家財整理風景.jpeg"
                    alt="高齢者住宅紹介サービス"
                    fill
                    className="object-cover"
                  />
                )}
                {index === 1 && (
                  <Image
                    src="/images/gallery/丁寧な搬入・搬出.jpeg"
                    alt="福祉引っ越しサービス"
                    fill
                    className="object-cover"
                  />
                )}
                {index === 2 && (
                  <Image
                    src="/images/gallery/貴重品査定.jpeg"
                    alt="生前整頓・遺品整理サービス"
                    fill
                    className="object-cover"
                  />
                )}
                {index === 3 && (
                  <Image
                    src="/images/gallery/適正な家財処分風景.jpeg"
                    alt="中古家電販売・買取サービス"
                    fill
                    className="object-cover"
                  />
                )}
                {index === 4 && (
                  <Image
                    src="/images/gallery/外注先.JPEG"
                    alt="荷物預かりサービス"
                    fill
                    className="object-cover"
                  />
                )}

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

                <div className="space-y-2">
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
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            どのサービスがお客様に最適かわからない場合でも、まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0120-651-340"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>今すぐお電話</span>
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>メールで相談</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;