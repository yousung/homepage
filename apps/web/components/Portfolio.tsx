const projects = [
  {
    tag: '웹 개발',
    title: '이커머스 플랫폼 리빌드',
    description:
      '레거시 모놀리스를 마이크로서비스로 전환, 응답 속도 40% 개선 및 월간 트래픽 3배 성장 지원.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS'],
    accent: 'bg-brand-secondary',
  },
  {
    tag: 'UI/UX + 개발',
    title: 'SaaS 대시보드',
    description:
      '데이터 시각화 중심 B2B SaaS 제품의 디자인 시스템 구축 및 전체 프론트엔드 개발.',
    tech: ['React', 'TypeScript', 'D3.js', 'Figma'],
    accent: 'bg-brand-accent',
  },
  {
    tag: '컨설팅',
    title: '핀테크 기술 전략',
    description:
      'PCI-DSS 규정 준수를 위한 보안 아키텍처 재설계 및 클라우드 마이그레이션 로드맵 수립.',
    tech: ['AWS', 'Terraform', 'Security Review'],
    accent: 'bg-brand-primary',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">Portfolio</p>
          <h2 className="mb-4 text-3xl font-bold text-brand-text sm:text-4xl">함께한 프로젝트</h2>
          <p className="mx-auto max-w-2xl text-lg text-brand-text-muted">
            다양한 산업군의 고객과 함께 만들어낸 결과물
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-brand-border transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`relative h-48 overflow-hidden ${project.accent}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <svg className="h-12 w-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-brand-text transition-colors group-hover:text-brand-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-brand-text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-lg bg-brand-bg px-2.5 py-1 text-xs font-medium text-brand-text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
