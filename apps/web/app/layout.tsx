import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const SITE_URL = 'https://www.lovizu.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lovizu — IT 솔루션 파트너',
    template: '%s | Lovizu',
  },
  description: '깊이 있는 IT 솔루션으로 고객의 성장을 함께 그려가는 파트너, Lovizu. 개발, UI/UX 디자인, IT 컨설팅을 직접 수행합니다.',
  keywords: ['IT 솔루션', '소프트웨어 개발', 'UI/UX 디자인', 'IT 컨설팅', '웹 개발', 'Lovizu', '로비주'],
  authors: [{ name: 'Lovizu', url: SITE_URL }],
  creator: 'Lovizu',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: 'Lovizu',
    title: 'Lovizu — IT 솔루션 파트너',
    description: '깊이 있는 IT 솔루션으로 고객의 성장을 함께 그려가는 파트너, Lovizu',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lovizu — IT 솔루션 파트너',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lovizu — IT 솔루션 파트너',
    description: '깊이 있는 IT 솔루션으로 고객의 성장을 함께 그려가는 파트너, Lovizu',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MTZ2HBPR2F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MTZ2HBPR2F');
          `}
        </Script>
      </body>
    </html>
  );
}
