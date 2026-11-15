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
            <h2 className="text-xl font-semibold text-brand-text">1. 개인정보의 처리 목적</h2>
            <p>회사는 홈페이지를 통해 접수되는 문의를 다음 목적 범위에서만 처리합니다.</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>문의 내용 확인 및 답변 제공</li>
              <li>프로젝트 상담, 협업 제안, 운영 문의에 대한 후속 커뮤니케이션</li>
              <li>문의 이력 확인이 필요한 경우의 중복 문의 대응 및 분쟁 예방</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">2. 처리하는 개인정보 항목</h2>
            <p>
              회사는 홈페이지 문의 양식을 통해 이용자가 직접 입력하는 다음 정보를 처리합니다.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>필수 항목: 문의 유형, 이름, 이메일 주소, 문의 내용</li>
              <li>선택 항목: 연락처, 회사명, 이용자가 문의 본문에 자율적으로 기재한 프로젝트 정보</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">3. 개인정보의 처리 및 보유 기간</h2>
            <p>
              회사는 개인정보 수집 시점에 고지한 목적이 달성될 때까지 개인정보를 보유 및
              이용합니다.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>문의 응대 목적의 개인정보: 문의 대응 완료 후 지체 없이 파기</li>
              <li>관계 법령상 보존 의무가 있거나 분쟁 대응이 필요한 경우: 해당 사유 종료 시까지 보관</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">4. 개인정보의 제3자 제공</h2>
            <p>
              회사는 정보주체의 별도 동의가 있거나 법령에 특별한 규정이 있는 경우를 제외하고는
              개인정보를 제3자에게 제공하지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">5. 개인정보 처리위탁</h2>
            <p>
              회사는 별도 서버 데이터베이스에 문의 내용을 저장하지 않으며, 문의 양식에 입력된 내용을
              회사 이메일로 전달하기 위해 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>수탁자: Web3Forms (https://web3forms.com)</li>
              <li>위탁 업무: 문의 양식 입력 내용의 수신 및 회사 이메일로의 전송</li>
              <li>보유 및 이용 기간: 수탁자 서버에 30일간 보관 후 자동 삭제</li>
            </ul>
            <p className="pt-2 font-semibold text-brand-text">개인정보의 국외 이전</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>이전받는 자: Web3Forms (연락처: support@web3forms.com)</li>
              <li>
                이전되는 국가: 인도(운영 국가) 및 수탁자가 이용하는 인프라(Amazon Web Services,
                Cloudflare, Hetzner)의 데이터 처리 국가
              </li>
              <li>이전 항목: 위 2항의 문의 양식 입력 항목</li>
              <li>이전 시기 및 방법: 이용자가 문의 양식을 제출하는 시점에 암호화된 네트워크(HTTPS)로 전송</li>
              <li>이용 목적 및 보유 기간: 문의 내용의 이메일 전송, 30일간 보관 후 자동 삭제</li>
              <li>
                거부 방법 및 효과: 국외 이전을 원하지 않는 경우 문의 양식 대신 이메일로 직접 문의하실 수
                있으며, 이 경우 문의 응대에 불이익은 없습니다.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">6. 정보주체의 권리, 의무 및 행사방법</h2>
            <p>
              이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있으며,
              회사는 관련 법령에 따라 지체 없이 검토 및 조치합니다.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있는 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">7. 개인정보의 파기</h2>
            <p>
              회사는 개인정보 처리 목적이 달성되거나 보유 기간이 종료된 경우 지체 없이 해당
              개인정보를 파기합니다.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>전자적 파일 형태의 정보는 복구가 어렵도록 삭제합니다.</li>
              <li>출력물 또는 별도 문서 형태의 정보는 분쇄 또는 소각 등의 방법으로 파기합니다.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">8. 개인정보의 안전성 확보 조치</h2>
            <p>
              회사는 개인정보의 안전성 확보를 위해 관리적, 기술적 조치를 적용하도록 노력합니다.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>개인정보 접근 권한의 최소화</li>
              <li>업무 목적 범위 내 접근 통제 및 계정 관리</li>
              <li>서비스 운영 환경에 대한 기본 보안 점검 및 관리</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">9. 개인정보 보호책임자 및 문의처</h2>
            <p>
              개인정보 관련 문의, 열람청구, 정정·삭제 요청은 아래 연락처로 접수하실 수 있습니다.
              <br />
              문의:{' '}
              <a className="text-brand-accent underline" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-brand-text">10. 개인정보처리방침의 변경</h2>
            <p>
              본 방침은 시행일로부터 적용되며, 법령 또는 서비스 변경에 따라 내용이 추가, 삭제,
              수정될 경우 홈페이지를 통해 변경 사항을 고지합니다.
            </p>
          </section>

          <p className="text-sm text-brand-text-muted">시행일: 2026년 11월 15일</p>
        </div>
      </section>
    </main>
  );
}
