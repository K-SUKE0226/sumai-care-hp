const FeaturesSection = () => {
  const features = [
    {
      title: "スタッフの仲の良さ",
      description: "私たちの最大の強みは、スタッフ同士の良好な関係性です。チーム一丸となってお客様をサポートし、和やかで安心できる雰囲気づくりを心がけています。",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      image: "👥"
    },
    {
      title: "要支援の方への配慮",
      description: "介護や福祉の専門知識を持つスタッフが、要支援の方お一人おひとりの状況に合わせて最適なサービスをご提案いたします。",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      image: "💙"
    },
    {
      title: "ご家族の要望を最大限に",
      description: "「こんなことお願いできるかな？」そんなお気持ちでも大丈夫です。可能な限りご要望にお応えし、お客様に寄り添ったサービスを提供します。",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      image: "🤝"
    }
  ];

  const testimonials = [
    {
      text: "母の施設への引っ越しでお世話になりました。スタッフの皆さんがとても親切で、母も安心して過ごすことができました。",
      author: "札幌市　A様",
      service: "福祉引っ越し"
    },
    {
      text: "急な入院で荷物の預かりをお願いしました。迅速に対応していただき、本当に助かりました。",
      author: "札幌市　B様", 
      service: "荷物預かり"
    },
    {
      text: "遺品整理を依頼させていただきました。大切な思い出の品を丁寧に扱っていただき、感謝しています。",
      author: "札幌市　C様",
      service: "遺品整理"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">私たちが選ばれる理由</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            すまいケアは、お客様お一人おひとりに寄り添うことを大切にしています。
            私たちの強みをご紹介させていただきます。
          </p>
        </div>

        {/* 特徴 */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{feature.image}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 実績・信頼性 */}
        <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-3xl p-12 mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">サービス提供実績</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-gray-600">お客様満足度</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24時間</div>
              <p className="text-gray-600">緊急対応可能</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">保険</div>
              <p className="text-gray-600">完備で安心</p>
            </div>
          </div>
        </div>

        {/* お客様の声 */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h3>
            <p className="text-lg text-gray-600">
              実際にサービスをご利用いただいたお客様からのお声をご紹介します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;