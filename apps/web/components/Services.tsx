const services = [
  {
    badge: '개발',
    title: '웹 & 앱 개발',
    description:
      'React, Next.js, Node.js 기반의 고성능 웹 서비스와 모바일 애플리케이션을 구축합니다. 스케일러블한 아키텍처로 지금의 트래픽은 물론, 성장 이후도 대비합니다.',
    features: ['Next.js / React', 'Node.js / NestJS', 'AWS / GCP 배포', 'CI/CD 자동화'],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    badge: 'UI/UX',
    title: 'UI/UX 디자인',
    description:
      '사용자 리서치부터 와이어프레임, 프로토타입, 최종 디자인까지 일관된 경험을 설계합니다. 개발팀과 같은 조직에 있기에 디자인과 구현 사이의 간극이 없습니다.',
    features: ['UX 리서치 & 설계', '프로토타이핑', '디자인 시스템', '반응형 UI'],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    badge: '전략',
    title: 'IT 컨설팅 & 디지털 전환',
    description:
      '레거시 시스템 분석, 클라우드 마이그레이션, 프로세스 자동화 등 비즈니스 효율화를 위한 기술 전략을 수립합니다. 방향성부터 실행까지 동행합니다.',
    features: ['기술 아키텍처 진단', '클라우드 전환', '자동화 설계', '비용 최적화'],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    badge: '운영',
    title: '운영 & 유지보수',
    description:
      '서비스를 만든 팀이 직접 운영합니다. 장애 대응, 정기 점검, 보안 패치, 성능 최적화로 시스템의 건강을 지속적으로 관리합니다.',
    features: ['장애 대응', '정기 점검', '보안 패치', '성능 최적화'],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">Services</p>
          <h2 className="mb-4 text-3xl font-bold text-brand-text sm:text-4xl">제공하는 서비스</h2>
          <p className="mx-auto max-w-2xl text-lg text-brand-text-muted">
            고객의 비즈니스 단계에 맞는 최적의 서비스를 제공합니다
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group cursor-default rounded-2xl border border-brand-border bg-white p-8 transition-all hover:border-brand-accent/40 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/5 text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white">
                {service.icon}
              </div>
              <span className="mb-3 inline-block rounded-full bg-brand-bg px-3 py-1 text-xs font-semibold text-brand-accent">
                {service.badge}
              </span>
              <h3 className="mb-3 text-xl font-bold text-brand-text">{service.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-brand-text-muted">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-brand-text-muted">
                    <svg className="h-4 w-4 shrink-0 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
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
