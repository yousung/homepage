type Plan = {
  name: string;
  summary: string;
  price: string;
  priceNote: string;
  annual?: { price: string; note: string };
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: '호스팅',
    summary: '서버 임대 + SSL',
    price: '30,000',
    priceNote: '월구독 · 연 360,000원',
    annual: { price: '300,000', note: '연구독 · 2개월 무료' },
    features: ['서버 임대', 'SSL 인증서'],
  },
  {
    name: '케어',
    summary: '호스팅 + 서버 관리 + 간단한 변경',
    price: '100,000',
    priceNote: '월구독 · 연 1,200,000원',
    features: ['호스팅 플랜 전체 포함', '서버 관리 (보안 업데이트 · 월간 점검)', '간단한 변경사항 월 2회 무료'],
    highlighted: true,
  },
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-brand-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-brand-border bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">Pricing</p>
          <h2 className="mb-4 text-3xl font-bold text-brand-text sm:text-4xl">유지보수 구독 요금제</h2>
          <p className="mx-auto max-w-2xl text-lg text-brand-text-muted">
            런칭 이후에도 안정적으로 운영될 수 있도록, 필요한 만큼만 구독하세요
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              aria-labelledby={`plan-${plan.name}`}
              className={`flex flex-col rounded-2xl border bg-white p-8 ${
                plan.highlighted ? 'border-brand-accent shadow-lg' : 'border-brand-border'
              }`}
            >
              <h3 id={`plan-${plan.name}`} className="text-xl font-bold text-brand-text">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-brand-text-muted">{plan.summary}</p>

              <div className="mt-6">
                <p className="text-brand-text">
                  <span className="text-sm">월 </span>
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-sm">원</span>
                </p>
                <p className="mt-1 text-xs text-brand-text-muted">{plan.priceNote}</p>
              </div>

              {plan.annual && (
                <div className="mt-4 rounded-xl bg-brand-bg px-4 py-3">
                  <p className="text-brand-text">
                    <span className="text-sm">연 </span>
                    <span className="text-2xl font-bold tracking-tight">{plan.annual.price}</span>
                    <span className="text-sm">원</span>
                  </p>
                  <p className="mt-1 text-xs font-semibold text-brand-accent">{plan.annual.note}</p>
                </div>
              )}

              <ul className="mt-6 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-brand-text-muted">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-brand-accent text-white hover:bg-brand-accent-hover'
                    : 'bg-brand-primary text-white hover:bg-brand-secondary'
                }`}
              >
                {plan.name} 플랜 문의하기
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-brand-text-muted">
          Lovizu가 제작한 홈페이지를 대상으로 합니다. 모든 금액은 부가세 별도이며, 변경 범위 및 세부 조건은
          상담 시 안내드립니다.
        </p>
      </div>
    </section>
  );
}
