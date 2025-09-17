const ComplianceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              安心してお任せいただける理由
            </h2>
            <p className="text-lg text-gray-600">
              適切な許可と資格を持つ業者として、法令遵守でサービスをご提供しています
            </p>
          </div>

          {/* 警告セクション */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L3.312 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-blue-800 font-semibold">
                    ご存知ですか？<br />
                    不用品回収として一般家庭のゴミを持ち帰ることは違法です。
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  無許可の業者による不用品回収は廃棄物処理法違反となります。
                  すまいケアでは適切な許可を取得し、法令を遵守してサービスを提供しておりますので、安心してお任せいただけます。
                </p>
              </div>
            </div>
          </div>

          {/* 当社の許可・資格 */}
          <div className="bg-primary/5 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              すまいケアの許可・資格
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">一般貨物運送業許可</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  国土交通大臣許可を取得し、適切な運送サービスを提供しています
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">損害保険加入済み</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  万が一の事故に備えて、十分な保険に加入しています
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">適正処理の実施</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  法令に従い、適切な方法で処理・リサイクルを行います
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M13 3L8 7l5 4 5-4-5-4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">施設との連携実績</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  多くの医療機関・介護施設との信頼関係を築いています
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <p className="text-gray-700 mb-4">
                許可・資格等についてご質問がございましたらお気軽にお問い合わせください
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;