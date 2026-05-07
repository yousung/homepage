export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-brand-primary overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-secondary/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-accent/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-accent" />
          IT 솔루션 파트너
        </div>

        <h1 className="mb-6 text-[28px] font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          비즈니스 성장을 위한
          <br />
          <span className="text-white">IT 솔루션 파트너</span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
          Lov는 개발, UI/UX 디자인, IT 컨설팅을 직접 수행하는 팀입니다.
          요구사항을 받아 만드는 것이 아니라, 비즈니스 문제를 먼저 파악하고 기술적 방향을
          제안합니다. 런칭이 끝이 아닌, 지속 가능한 운영까지 책임집니다.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl bg-brand-accent px-8 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-accent-hover hover:shadow-xl"
          >
            프로젝트 상담하기
          </a>
          <a
            href="#about"
            className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition-all hover:bg-white/20"
          >
            더 알아보기
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
