const services = [
  {
    badge: '개발',
    title: '웹 & 앱 개발',
    description:
      'React, Next.js, Node.js 등 최신 기술로 빠르고 안정적인 제품을 빌드합니다. MVP부터 프로덕션까지 전 주기를 커버합니다.',
    features: ['Next.js / React', 'Node.js / NestJS', 'AWS / GCP 배포', 'CI/CD 자동화'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    badge: 'UI/UX',
    title: '디자인 & 브랜딩',
    description:
      '사용자 경험을 최우선으로 하는 디자인 시스템을 구축하고, 브랜드 아이덴티티를 시각적으로 구현합니다.',
    features: ['UX 리서치 & 설계', '디자인 시스템', '반응형 UI', '브랜드 가이드라인'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    badge: '전략',
    title: 'IT 컨설팅',
    description:
      '기술 전략 수립부터 실행 로드맵까지, 비즈니스 목표를 달성하기 위한 최적의 IT 솔루션을 설계합니다.',
    features: ['기술 아키텍처 설계', '디지털 전환(DX)', '성능 최적화', '비용 절감 전략'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            제공하는 서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            고객의 비즈니스 단계에 맞는 최적의 서비스를 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-900/5 text-blue-900 flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full mb-3">
                {service.badge}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
