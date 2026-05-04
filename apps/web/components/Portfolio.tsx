const projects = [
  {
    tag: '웹 개발',
    title: '이커머스 플랫폼 리빌드',
    description:
      '레거시 모놀리스를 마이크로서비스로 전환, 응답 속도 40% 개선 및 월간 트래픽 3배 성장 지원.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS'],
    accent: 'bg-blue-500',
  },
  {
    tag: 'UI/UX + 개발',
    title: 'SaaS 대시보드',
    description:
      '데이터 시각화 중심 B2B SaaS 제품의 디자인 시스템 구축 및 전체 프론트엔드 개발.',
    tech: ['React', 'TypeScript', 'D3.js', 'Figma'],
    accent: 'bg-indigo-500',
  },
  {
    tag: '컨설팅',
    title: '핀테크 기술 전략',
    description:
      'PCI-DSS 규정 준수를 위한 보안 아키텍처 재설계 및 클라우드 마이그레이션 로드맵 수립.',
    tech: ['AWS', 'Terraform', 'Security Review'],
    accent: 'bg-violet-500',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            함께한 프로젝트
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 산업군의 고객과 함께 만들어낸 결과물
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Placeholder visual */}
              <div className={`h-48 ${project.accent} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg">
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
