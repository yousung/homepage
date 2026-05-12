import Link from 'next/link';
import { getContactEmail } from '@/lib/contactEmail';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const contactEmail = getContactEmail();

  return (
    <footer className="bg-brand-primary py-12 text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-2xl font-bold tracking-tight text-white">Lovizu</span>
            <p className="mt-1 text-sm">기술에 진심인 팀</p>
            <p className="mt-1 text-xs text-white/65">개발 · UI/UX · IT 컨설팅</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm">
            <p>© {currentYear} Lovizu. All rights reserved.</p>
            <a href={`mailto:${contactEmail}`} className="text-white/70 transition-colors hover:text-white">
              {contactEmail}
            </a>
            <div className="flex items-center gap-3 text-xs text-white/60">
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                개인정보처리방침
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/terms" className="transition-colors hover:text-white">
                이용약관
              </Link>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex gap-6 text-sm">
              {['소개', '서비스', '포트폴리오', '연락하기'].map((label, i) => {
                const hrefs = ['#about', '#services', '#portfolio', '#contact'];
                return (
                  <li key={label}>
                    <a href={hrefs[i]} className="transition-colors hover:text-white">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
