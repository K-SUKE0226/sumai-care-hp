import Image from "next/image";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/images/gallery/丁寧な搬入・搬出.jpeg",
      title: "丁寧な搬入・搬出作業",
      category: "搬出・搬入"
    },
    {
      src: "/images/gallery/家財整理風景.jpeg",
      title: "家財整理作業風景",
      category: "整理・片付け"
    },
    {
      src: "/images/gallery/適正な家財処分風景.jpeg",
      title: "適正な家財処分",
      category: "処分・リサイクル"
    },
    {
      src: "/images/gallery/貴重品査定.jpeg",
      title: "貴重品の査定・分別",
      category: "査定・分別"
    },
    {
      src: "/images/gallery/家財撤去後の清掃.JPG",
      title: "撤去後の清掃作業",
      category: "清掃・メンテナンス"
    },
    {
      src: "/images/gallery/さわやかスタッフ.jpeg",
      title: "さわやかなスタッフ対応",
      category: "スタッフ"
    },
    {
      src: "/images/gallery/特殊清掃.jpeg",
      title: "専門的な特殊清掃",
      category: "特殊清掃"
    },
    {
      src: "/images/gallery/危険物仕分け.jpeg",
      title: "危険物の安全な仕分け",
      category: "安全対応"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">作業実績ギャラリー</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            すまいケアの実際の作業風景をご紹介します。<br />
            丁寧で確実な作業で、お客様にご満足いただいております。
          </p>
        </div>

        {/* ギャラリーグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* オーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-semibold mb-1">{image.title}</p>
                      <span className="inline-block bg-primary/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs border border-white/20">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-white rounded-3xl shadow-xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            確実な作業で<span className="text-primary">安心をお届け</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            お客様のご要望に応じて、丁寧かつ迅速に作業いたします。<br />
            現地確認・お見積りは無料ですので、まずはお気軽にご相談ください。
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

export default GallerySection;