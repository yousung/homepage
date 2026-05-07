import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-brand-text">404</h1>
        <p className="mb-8 text-brand-text-muted">페이지를 찾을 수 없습니다.</p>
        <Link
          href="/"
          className="rounded-xl bg-brand-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-accent-hover"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
