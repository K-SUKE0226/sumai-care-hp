import Image from "next/image";

const BeforeAfterSection = () => {
  const beforeAfterCases = [
    {
      id: 1,
      title: "一人暮らし高齢者のお部屋整理",
      description: "長年住まわれたお部屋の家財整理から清掃まで",
      beforeImage: "/images/before-after/before1.jpg",
      afterImage: "/images/before-after/after1.jpg",
      beforeAlt: "整理前：家財道具で溢れた部屋",
      afterAlt: "整理後：すっきりと片付いた部屋"
    },
    {
      id: 2,
      title: "施設入居前の荷物整理",
      description: "必要な物だけを残し、その他は適切に処分・保管",
      beforeImage: "/images/before-after/before2.jpg",
      afterImage: "/images/before-after/after2.jpg",
      beforeAlt: "整理前：荷物が山積みの状態",
      afterAlt: "整理後：必要な物だけが残された状態"
    },
    {
      id: 3,
      title: "急な入院による緊急整理",
      description: "入院中に家族様のご依頼でお部屋を整理・清掃",
      beforeImage: "/images/before-after/before3.jpg",
      afterImage: "/images/before-after/after3.jpg",
      beforeAlt: "整理前：散乱した家財道具",
      afterAlt: "整理後：清潔で安全な住環境"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">施工実績</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            すまいケアの家財撤去・整理サービスの実際の施工事例をご紹介します。<br />
            お客様の状況に合わせて、丁寧に作業いたします。
          </p>
        </div>

        {/* ビフォーアフター事例 */}
        <div className="space-y-16">
          {beforeAfterCases.map((caseItem, index) => (
            <div key={caseItem.id} className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {caseItem.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Before */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="absolute -top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold z-10 shadow-lg">
                      BEFORE
                    </div>
                    <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
                      {/* 実際の写真を表示 */}
                      <Image
                        src="/images/before-after/IMG_3330.JPEG"
                        alt={caseItem.beforeAlt}
                        fill
                        className="object-cover"
                      />
                      {/* 写真上に半透明の情報オーバーレイ */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                        <p className="text-sm font-medium text-center">整理前の状態</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {caseItem.beforeAlt}
                  </p>
                </div>

                {/* After */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="absolute -top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold z-10 shadow-lg">
                      AFTER
                    </div>
                    <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
                      {/* 実際の写真を表示（Afterはservicesフォルダからきれいな写真を使用） */}
                      <Image
                        src={index === 0 ? "/images/services/IMG_3355.JPG" : index === 1 ? "/images/services/IMG_3357.JPG" : "/images/services/IMG_3355.JPG"}
                        alt={caseItem.afterAlt}
                        fill
                        className="object-cover"
                      />
                      {/* 写真上に半透明の情報オーバーレイ */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                        <p className="text-sm font-medium text-center">整理後の状態</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {caseItem.afterAlt}
                  </p>
                </div>
              </div>

              {/* 作業のポイント */}
              <div className="mt-8 bg-white rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  作業のポイント
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>• 思い出の品は丁寧に仕分け</div>
                  <div>• リサイクル可能な物は適切に処理</div>
                  <div>• 清掃まで含めて完全対応</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/5 to-blue-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            お客様の状況に合わせて最適なプランをご提案
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            どんな状況でも、まずはお気軽にご相談ください。<br />
            現地確認・お見積りは無料で承っております。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0120-651-340"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>無料相談・現地確認</span>
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold text-lg"
            >
              メールで相談
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;