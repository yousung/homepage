import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lovizu — IT 솔루션 파트너',
  description: '깊이 있는 IT 솔루션으로 고객의 성장을 함께 그려가는 파트너, Lovizu',
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
      <body>{children}</body>
    </html>
  );
}
