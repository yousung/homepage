import type { Metadata } from 'next';
import { getContactEmail } from '@/lib/contactEmail';

export const metadata: Metadata = {
  title: '개인정보처리방침 | Lovizu',
  description: 'Lovizu 개인정보처리방침',
};

export default function PrivacyPage() {
  const contactEmail = getContactEmail();

  return (
    <main className="min-h-screen bg-brand-bg py-16">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-brand-text">개인정보처리방침</h1>
        <div className="space-y-6 leading-relaxed text-brand-text-muted">
          <p>
            Lovizu(이하 회사)는 문의 응대를 위해 사용자가 직접 입력한 이름, 이메일, 메시지를
            메일 클라이언트를 통해 수신합니다.
          </p>
          <p>
            회사는 본 홈페이지에서 별도 서버 저장형 수집을 하지 않으며, 전송된 문의 내용은
            응대 목적에 한해 사용합니다.
          </p>
          <p>
            개인정보 관련 문의는 아래 이메일로 요청하실 수 있습니다.
            <br />
            문의:{' '}
            <a className="text-brand-accent underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
          <p className="text-sm text-brand-text-muted">시행일: 2026년 5월 7일</p>
        </div>
      </section>
    </main>
  );
}
