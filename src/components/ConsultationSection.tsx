const ConsultationSection = () => {
  const situations = [
    {
      icon: "🏠",
      text: "お父さんが施設に入るけど、家具はどうしよう...",
      solution: "施設入居の荷物整理・預かり・処分まで一括対応"
    },
    {
      icon: "🏥", 
      text: "退院したけど、家が片付いてない...",
      solution: "退院前の環境整備・清掃・バリアフリー対応"
    },
    {
      icon: "📦",
      text: "施設を変わるけど、荷物が多すぎて...",
      solution: "施設間引っ越し・荷物の仕分け・一時預かり"
    },
    {
      icon: "🤔",
      text: "一人暮らしの母の家、どうやって片付ける？",
      solution: "生前整頓・遺品整理・思い出の品の丁寧な仕分け"
    },
    {
      icon: "💰",
      text: "生活保護の引っ越し、どこに頼めば...",
      solution: "生活保護対応・各種手続きサポート・費用相談"
    },
    {
      icon: "😰",
      text: "アパートで事故があって、どうしたら...",
      solution: "特殊清掃・原状回復・近隣配慮・24時間対応"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">こんなお困りごと、ありませんか？</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            「こんなこと頼めるかな？」「どこに相談していいか分からない」「急にこんなことになって...」<br />
            <span className="text-primary font-semibold">まずはお気軽にご相談ください。</span>
          </p>
        </div>

        {/* 困りごと一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {situations.map((situation, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="text-center mb-4">
                <span className="text-4xl mb-4 block">{situation.icon}</span>
                <p className="text-gray-700 font-medium mb-4 leading-relaxed">
                  {situation.text}
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-primary font-semibold text-sm">すまいケアなら</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {situation.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ワンストップ提案 */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            こんなご相談、実は全部できます
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-lg">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <span className="text-2xl mr-2">🏠</span>
              <span className="font-semibold">住まい</span>
            </div>
            <span className="text-primary text-2xl hidden sm:block">→</span>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <span className="text-2xl mr-2">🚚</span>
              <span className="font-semibold">引っ越し</span>
            </div>
            <span className="text-primary text-2xl hidden sm:block">→</span>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <span className="text-2xl mr-2">🧹</span>
              <span className="font-semibold">清掃</span>
            </div>
            <span className="text-primary text-2xl hidden sm:block">→</span>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <span className="text-2xl mr-2">📦</span>
              <span className="font-semibold">荷物預かり</span>
            </div>
          </div>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            <strong className="text-primary">全部別々の業者に頼まなくても、すまいケア1社で完結！</strong><br />
            窓口ひとつで、すべてのお困りごとを解決いたします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0120-651-340"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>今すぐ相談する</span>
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>「大丈夫ですよ」を聞いてみる</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;