import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관 | Lovizu',
  description: 'Lovizu 홈페이지 이용약관',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">이용약관</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            본 홈페이지는 Lovizu의 서비스 소개 및 문의 접수를 위한 목적으로 제공됩니다.
          </p>
          <p>
            사용자는 홈페이지 내 정보를 관련 법령 및 본 약관에 따라 이용해야 하며, 서비스
            운영을 방해하는 행위를 해서는 안 됩니다.
          </p>
          <p>
            홈페이지 콘텐츠는 사전 고지 없이 변경될 수 있으며, 회사는 안정적인 서비스 제공을
            위해 필요한 경우 일부 기능을 수정할 수 있습니다.
          </p>
          <p className="text-sm text-gray-500">시행일: 2026년 5월 7일</p>
        </div>
      </section>
    </main>
  );
}
