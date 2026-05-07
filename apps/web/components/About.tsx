const capabilities = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: '풀스택 개발',
    description:
      '프론트엔드, 백엔드, 클라우드 인프라를 하나의 팀이 일관된 품질로 구현합니다. 의존성 충돌과 책임 공방이 없습니다.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'UX 중심 설계',
    description:
      '사용자 행동 데이터를 기반으로 전환율을 높이는 인터페이스를 설계합니다. 예쁜 것이 아닌 작동하는 디자인.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'IT 컨설팅',
    description:
      '현재 시스템의 구조적 문제를 진단하고, 단계적 디지털 전환 로드맵을 제시합니다.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.305.835 2.414 2 2.826V17h2v-3.174A2.999 2.999 0 0015 11c0-1.657-1.343-3-3-3zm0-5a9 9 0 00-9 9c0 3.824 2.391 7.087 5.757 8.383L10 22h4l1.243-1.617A9.002 9.002 0 0021 12a9 9 0 00-9-9z" />
      </svg>
    ),
    title: '장기 유지보수',
    description:
      '납품 후 방치 없음. 정기 점검, 보안 업데이트, 기능 개선까지 운영 전 주기를 함께합니다.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">
            About Lovizu
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-brand-text sm:text-4xl">
            함께 성장하는
            <br />
            IT 파트너십
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-brand-text-muted">
            Lovizu는 기술이 비즈니스의 실질적인 성장 도구가 되어야 한다고 믿습니다. 화려한 설계보다
            견고한 구현을, 빠른 납품보다 정확한 진단을 우선합니다.
          </p>
          <p className="leading-relaxed text-brand-text-muted">
            클라이언트의 산업과 목표를 깊이 이해한 후 개발에 착수하는 것이 우리의 원칙입니다.
            파트너와 함께 성장하는 IT, 그것이 Lovizu의 방식입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group rounded-2xl border border-brand-border bg-brand-bg p-6 transition-all hover:border-brand-accent/40 hover:bg-white"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-white transition-transform group-hover:scale-105">
                {cap.icon}
              </div>
              <h3 className="mb-2 font-semibold text-brand-text">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-brand-text-muted">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
