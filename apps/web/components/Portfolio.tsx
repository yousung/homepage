type Project = {
  tag: string;
  title: string;
  description: string;
  tech: string[];
  accent: string;
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    tag: '웹 개발',
    title: '부동산 따지 — 매물 포털',
    description:
      '전원주택·토지·상가 매물을 테마별·용도별로 탐색하는 부동산 포털. Laravel 기반 관리자/매물 시스템과 AWS 인프라 위에서 안정적으로 운영 중.',
    tech: ['Laravel', 'PHP', 'MySQL', 'AWS', 'jQuery'],
    accent: 'bg-brand-secondary',
    image: '/portfolio/ddaji.png',
    link: 'https://www.ddaji.com/item',
  },
  {
    tag: '이커머스',
    title: '신라인터넷면세점',
    description:
      '신라면세점 공식 온라인 스토어프론트. 출국 시간 기반 주문 시스템, 시간 한정 세일, 브랜드 큐레이션, 회원 적립 등 면세 쇼핑에 특화된 기능을 대규모 트래픽에 맞춰 설계·구축했습니다.',
    tech: ['프론트엔드 개발', '이커머스 백엔드', '결제/PG 연동', 'CDN'],
    accent: 'bg-brand-secondary',
    image: '/portfolio/shilladfs-kr.jpg',
    link: 'https://www.shilladfs.com/estore/kr/ko/?uiel=Desktop',
  },
  {
    tag: '글로벌 사이트',
    title: 'Shilla DFS — 다국어 스토어프론트',
    description:
      '한국어 본 사이트와 상품·재고 데이터를 공유하는 영어·일본어·중국어 스토어프론트. 환율 표시, 지역별 프로모션, 출국지 기반 배송 흐름까지 통합 운영합니다.',
    tech: ['i18n', '디자인 시스템', '글로벌 결제', '성능 최적화'],
    accent: 'bg-brand-accent',
    image: '/portfolio/shilladfs-ja.jpg',
    link: 'https://www.shilladfs.com/estore/kr/ja',
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
          {projects.map((project) => {
            const Card = (
              <div
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`relative h-48 overflow-hidden ${project.accent}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} 미리보기`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                        <svg className="h-12 w-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/30 bg-brand-text/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.tag}
                    </span>
                  </div>
                  {project.link && (
                    <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/40 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-text shadow-sm">
                        사이트 보기
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-bold text-brand-text transition-colors group-hover:text-brand-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-brand-text-muted">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-lg bg-brand-bg px-2.5 py-1 text-xs font-medium text-brand-text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} 사이트 열기`}
                className="block focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 rounded-2xl"
              >
                {Card}
              </a>
            ) : (
              Card
            );
          })}
        </div>
      </div>
    </section>
  );
}
