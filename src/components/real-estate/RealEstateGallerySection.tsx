import Image from "next/image";

const RealEstateGallerySection = () => {
  const workImages = [
    {
      src: "/images/gallery/家財撤去後の清掃.JPG",
      title: "退去後清掃完了状態",
      category: "清掃・原状回復",
      description: "入居者様の退去後、即座に清掃作業を完了"
    },
    {
      src: "/images/gallery/撤去作業簿.JPG",
      title: "詳細な作業報告書",
      category: "報告・管理",
      description: "オーナー様への作業進捗を詳細に報告"
    },
    {
      src: "/images/gallery/適正な家財処分風景.jpeg",
      title: "家財の適正処分",
      category: "撤去・処分",
      description: "残置物を法令に基づいて適正に処分"
    },
    {
      src: "/images/gallery/丁寧な搬入・搬出.jpeg",
      title: "家電搬入サービス",
      category: "搬入・設置",
      description: "入居者様向け家電の搬入・設置作業"
    },
    {
      src: "/images/gallery/特殊清掃.jpeg",
      title: "専門的特殊清掃",
      category: "特殊対応",
      description: "特殊な状況にも専門技術で対応"
    },
    {
      src: "/images/gallery/家財整理風景.jpeg",
      title: "入居前の荷物整理",
      category: "整理・サポート",
      description: "入居者様の荷物整理をお手伝い"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            実際の<span className="text-primary">作業風景</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            不動産会社様からのご依頼で実施した実際の作業風景をご紹介。<br />
            どのような状況でも、迅速かつ確実に対応いたします。
          </p>
        </div>

        {/* 作業風景グリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workImages.map((image, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* カテゴリータグ */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {image.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 作業の特徴 */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            不動産会社様に選ばれる理由
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">迅速対応</h4>
              <p className="text-sm text-gray-600">ご依頼から最短で翌日対応可能</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">詳細報告</h4>
              <p className="text-sm text-gray-600">作業進捗を写真付きで詳細報告</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ワンストップ</h4>
              <p className="text-sm text-gray-600">複数業者は不要、すべて一括対応</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateGallerySection;