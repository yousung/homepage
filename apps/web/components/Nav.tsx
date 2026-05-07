'use client';

import { useState } from 'react';

const links = [
  { label: '소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '연락하기', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-brand-border bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight text-brand-primary">
            Lovizu
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-brand-text-muted transition-colors hover:text-brand-primary">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="rounded-lg bg-brand-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-hover">
                문의하기
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="rounded-lg p-2 text-brand-text-muted hover:bg-brand-bg md:hidden"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-border bg-white md:hidden">
          <ul className="space-y-1 px-4 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-text-muted hover:bg-brand-bg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block rounded-lg bg-brand-accent px-3 py-2 text-center text-sm font-semibold text-white hover:bg-brand-accent-hover"
                onClick={() => setOpen(false)}
              >
                문의하기
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
