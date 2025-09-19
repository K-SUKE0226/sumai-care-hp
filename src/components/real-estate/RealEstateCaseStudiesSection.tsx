import Image from "next/image";

const RealEstateCaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "孤独死案件への特殊清掃対応",
      location: "札幌市中央区　1DK アパート",
      timeframe: "発見から5日で完全復旧",
      challenge: "孤独死発生の特殊案件。オーナー様から特殊清掃の依頼があり、進行状況や消臭処理から原状回復まで専門的な処理が必要でした。",
      solution: "特殊清掃の専門スタッフが対応。特殊清掃→消臭処理→原状回復工事→ハウスクリーニングまで5日間で完了。",
      result: "すぐに募集再開でき、空室期間を最小限に抑制。オーナー様から高い評価をいただきました。",
      beforeImage: "/images/before-after/IMG_3330.JPEG",
      afterImage: "/images/services/IMG_3355.JPG"
    },
    {
      id: 2,
      title: "生活保護受給者の入居サポート",
      location: "札幌市東区　1K マンション",
      timeframe: "行政手続きから入居まで2週間",
      challenge: "生活保護受給予定の方の入居。複雑な行政手続きと家電不足で入居が遅延する可能性がありました。",
      solution: "福祉事務所との連携で書類準備を代行。中古家電セット（冷蔵庫・洗濯機・電子レンジ）を適正価格で提供し搬入・設置まで完了。",
      result: "予定通りの入居実現。入居者様の生活も即日スタートでき、オーナー様にも満足いただけました。",
      beforeImage: "/images/before-after/IMG_3330.JPEG",
      afterImage: "/images/services/IMG_3357.JPG"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            実際の<span className="text-primary">解決事例</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            不動産会社様からご依頼いただいた実際の案件をご紹介します。<br />
            どんな困難な状況でも、すまいケアなら解決できます。
          </p>
        </div>

        {/* ケーススタディ */}
        <div className="space-y-16">
          {caseStudies.map((caseStudy, index) => (
            <div key={caseStudy.id} className="bg-gray-50 rounded-3xl p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* ケース情報 */}
                <div>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary text-white px-4 py-2 rounded-full font-bold text-sm mr-4">
                        CASE {caseStudy.id}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {caseStudy.timeframe}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      📍 {caseStudy.location}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm mr-2">
                          !
                        </span>
                        課題・問題点
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed pl-8">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm mr-2">
                          ⚡
                        </span>
                        すまいケアの解決策
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed pl-8">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-2">
                          ✓
                        </span>
                        結果・成果
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed pl-8">
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ビフォーアフター写真 */}
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Before */}
                    <div className="text-center">
                      <div className="relative mb-3">
                        <div className="absolute -top-3 left-2 bg-red-500 text-white px-3 py-1 rounded-full font-bold z-10 text-xs">
                          BEFORE
                        </div>
                        <div className="bg-gray-200 rounded-xl overflow-hidden aspect-[4/3] relative">
                          <Image
                            src={caseStudy.beforeImage}
                            alt="対応前の状態"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">
                        対応前の状態
                      </p>
                    </div>

                    {/* After */}
                    <div className="text-center">
                      <div className="relative mb-3">
                        <div className="absolute -top-3 left-2 bg-green-500 text-white px-3 py-1 rounded-full font-bold z-10 text-xs">
                          AFTER
                        </div>
                        <div className="bg-gray-200 rounded-xl overflow-hidden aspect-[4/3] relative">
                          <Image
                            src={caseStudy.afterImage}
                            alt="対応後の状態"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">
                        対応完了後の状態
                      </p>
                    </div>
                  </div>

                  {/* オーナー様の声 */}
                  <div className="mt-6 bg-white rounded-xl p-6">
                    <h5 className="font-bold text-gray-900 mb-3 text-sm">オーナー様の声</h5>
                    <blockquote className="text-gray-700 text-sm italic">
                      {index === 0
                        ? "「緊急事態でしたが、迅速で丁寧な対応をしていただき本当に助かりました。他の業者では対応できないと言われた案件でしたが、すまいケアさんは即座に対応してくれました。」"
                        : "「生活保護の手続きが複雑で困っていましたが、すまいケアさんが全面的にサポートしてくださり、予定通り入居が実現しました。入居者様にも大変喜んでいただけました。」"
                      }
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 実績数値 */}
        <div className="mt-16 bg-primary rounded-3xl text-white p-12 text-center">
          <h3 className="text-3xl font-bold mb-8">すまいケアの実績</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">年間対応件数</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5日</div>
              <div className="text-sm opacity-90">特殊清掃完了目安</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">お客様満足度</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">生活保護手続き成功率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateCaseStudiesSection;