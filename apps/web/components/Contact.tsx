import { getContactEmail } from '@/lib/contactEmail';

export default function Contact() {
  const contactEmail = getContactEmail();

  return (
    <section id="contact" className="bg-brand-bg py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">Contact</p>
            <h2 className="mb-6 text-3xl font-bold text-brand-text sm:text-4xl">
              프로젝트를
              <br />
              함께 시작해볼까요?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-brand-text-muted">
              어떤 아이디어든 환영합니다. 간단한 문의부터 시작해보세요. Lovizu 팀이 24시간 내로 답변드립니다.
            </p>

            <div className="mx-auto max-w-md space-y-4 text-left">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-brand-text-muted">이메일</p>
                  <a href={`mailto:${contactEmail}`} className="text-sm font-medium text-brand-text transition-colors hover:text-brand-accent">
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-brand-text-muted">위치</p>
                  <p className="text-sm font-medium text-brand-text">서울특별시, 대한민국</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
