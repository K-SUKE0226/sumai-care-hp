const RealEstateChallengesSection = () => {
  const challenges = [
    {
      title: "退去後の残置物処理",
      description: "冷蔵庫や洗濯機、大型家具が残されて困っている",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      pain: "処理業者探しや見積もり取得で時間を無駄にしている"
    },
    {
      title: "生活保護受給者の入居サポート",
      description: "行政手続きが複雑で入居が進まない",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      pain: "書類不備や手続き遅延でオーナー様にご迷惑をかけている"
    },
    {
      title: "入居者の家電不足問題",
      description: "実家暮らしから一人暮らしの方に冷蔵庫・洗濯機がない",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0" />
        </svg>
      ),
      pain: "入居が決まっても生活スタートが遅れてしまう"
    },
    {
      title: "転居時の送迎問題",
      description: "高齢者や障害者の方の移動手段がない",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      pain: "家族の負担が大きく、入居日程調整が困難"
    },
    {
      title: "特殊清掃が必要な案件",
      description: "孤独死や事故物件の特殊清掃サービス",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      pain: "特殊清掃に対応できる専門業者が見つからない"
    },
    {
      title: "オーナー様への報告業務",
      description: "作業状況をこまめに報告する必要がある",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      pain: "複数業者とのやり取りで連絡調整が煩雑"
    }
  ];

  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            不動産会社様の<span className="text-red-600">よくあるお困りごと</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            日々の業務で感じるこんなお悩み、ありませんか？<br />
            すまいケアなら、これらの問題をワンストップで解決いたします。
          </p>
        </div>

        {/* 課題一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mr-4">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{challenge.description}</p>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-sm text-red-700 font-medium">
                  <span className="font-bold">お困りポイント：</span><br />
                  {challenge.pain}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* まとめ */}
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              これらの課題、<span className="text-primary">すべて解決</span>できます
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              すまいケアは不動産会社様のパートナーとして、<br />
              <strong className="text-primary">退去から入居まで</strong>のすべての工程をサポート。<br />
              複数業者への依頼は不要です。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold">
                ワンストップ対応
              </span>
              <span className="bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold">
                特殊清掃対応
              </span>
              <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold">
                生活保護手続きサポート
              </span>
              <span className="bg-purple-100 text-purple-800 px-6 py-2 rounded-full font-semibold">
                オーナー様直接報告
              </span>
              <span className="bg-orange-100 text-orange-800 px-6 py-2 rounded-full font-semibold">
                迅速対応
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateChallengesSection;