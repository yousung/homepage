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
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">제1조 (홈페이지 이용)</h2>
            <p>
              본 홈페이지는 Lovizu(이하 &apos;회사&apos;)의 서비스 소개 및 문의 접수를 위한 목적으로
              제공됩니다.
            </p>
            <p>
              사용자는 홈페이지 내 정보를 관련 법령 및 본 약관에 따라 이용해야 하며, 서비스
              운영을 방해하는 행위를 해서는 안 됩니다.
            </p>
            <p>
              홈페이지 콘텐츠는 사전 고지 없이 변경될 수 있으며, 회사는 안정적인 서비스 제공을
              위해 필요한 경우 일부 기능을 수정할 수 있습니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">제2조 (유지보수 구독 서비스)</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                유지보수 구독 서비스(호스팅·케어 플랜)는 회사가 제작한 홈페이지를 대상으로 제공됩니다.
              </li>
              <li>
                플랜별 제공 범위와 요금은 홈페이지의 요금제 안내에 따르며, 모든 요금은 부가가치세
                별도입니다.
              </li>
              <li>
                월구독은 매월 선불로 결제하며, 연구독은 12개월 이용료를 10개월 요금으로 일시 선불
                결제합니다.
              </li>
              <li>
                케어 플랜의 &apos;간단한 변경사항&apos;은 텍스트·이미지 교체 등 기존 화면 구조 안에서의
                경미한 수정을 말하며, 월 2회까지 제공됩니다. 사용하지 않은 횟수는 다음 달로 이월되지
                않으며, 신규 페이지·기능 추가 등은 별도 견적으로 진행합니다.
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">제3조 (해지 및 환불)</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                결제 후 7일 이내이고 서비스 제공이 시작되기 전에 해지를 요청하는 경우 결제 금액
                전액을 환불합니다.
              </li>
              <li>
                월구독은 언제든지 해지를 요청할 수 있으며, 해지는 이미 결제한 이용 기간이 끝나는
                날에 효력이 발생합니다. 이미 결제한 월 이용료는 환불되지 않습니다.
              </li>
              <li>
                연구독을 중도 해지하는 경우, 결제 금액에서 이용한 개월 수에 월구독 정가를 곱한
                금액을 뺀 나머지를 환불합니다. 이용 개월 수는 서비스 시작월부터 해지 요청월까지로
                계산하며, 1개월 미만은 1개월로 봅니다. 계산 결과가 0원 이하인 경우 환불 금액은
                없습니다.
              </li>
              <li>환불은 해지 요청일로부터 영업일 기준 7일 이내에 결제 수단 또는 계좌로 진행합니다.</li>
              <li>
                이용료가 미납된 경우 회사는 사전 통지 후 서비스 제공을 중단할 수 있습니다.
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">제4조 (책임의 제한)</h2>
            <p>
              회사는 천재지변, 클라우드·통신 사업자의 장애 등 회사의 귀책사유가 없는 사유로 발생한
              서비스 중단에 대해서는 책임을 지지 않습니다. 다만 회사는 서비스가 신속히 정상화될 수
              있도록 노력합니다.
            </p>
          </section>

          <p className="text-sm text-gray-500">시행일: 2026년 11월 15일</p>
        </div>
      </section>
    </main>
  );
}
