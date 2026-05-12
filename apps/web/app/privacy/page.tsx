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
            Lovizu(이하 &apos;회사&apos;)는 홈페이지 문의 응대 과정에서 개인정보를 처리합니다.
            회사는 관련 법령을 준수하며, 이용자의 개인정보를 목적 범위 내에서만 최소한으로
            이용합니다.
          </p>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">1. 수집하는 개인정보 항목</h2>
            <p>
              회사는 문의 접수 시 이용자가 직접 입력하는 다음 정보를 처리할 수 있습니다:
              이름, 이메일 주소, 문의 내용.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">2. 개인정보 이용 목적</h2>
            <p>수집한 개인정보는 문의 확인, 답변 제공, 후속 커뮤니케이션을 위해서만 이용합니다.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">3. 보유 및 이용 기간</h2>
            <p>
              회사는 문의 응대가 완료된 후 관련 법령상 별도 보존 의무가 없는 한 지체 없이
              파기합니다. 다만 분쟁 대응, 반복 문의 확인 등 정당한 사유가 있는 경우 필요한 범위
              내에서 일정 기간 보관할 수 있습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">4. 제3자 제공 및 처리위탁</h2>
            <p>
              회사는 이용자의 개인정보를 외부에 판매하거나 마케팅 목적으로 제3자에게 제공하지
              않습니다. 현재 본 홈페이지는 별도 서버 데이터베이스에 문의 내용을 저장하지 않으며,
              문의 응대를 위한 기본적인 통신 환경을 제외한 별도 처리위탁을 두고 있지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">5. 이용자의 권리</h2>
            <p>
              이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있으며,
              회사는 관련 법령에 따라 지체 없이 검토 및 조치합니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">6. 문의처</h2>
            <p>
              개인정보 관련 문의는 아래 이메일로 접수하실 수 있습니다.
              <br />
              문의:{' '}
              <a className="text-brand-accent underline" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          </section>

          <p className="text-sm text-brand-text-muted">시행일: 2026년 5월 12일</p>
        </div>
      </section>
    </main>
  );
}
