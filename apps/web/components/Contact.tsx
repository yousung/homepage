import ContactForm from '@/components/ContactForm';
import { getContactEmail } from '@/lib/contactEmail';

export default function Contact() {
  const contactEmail = getContactEmail();

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              프로젝트를
              <br />
              함께 시작해볼까요?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              어떤 아이디어든 환영합니다. 간단한 문의부터 시작해보세요.
              Lov 팀이 24시간 내로 답변드립니다.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/10 text-blue-900 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">이메일</p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/10 text-blue-900 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">위치</p>
                  <p className="text-sm font-medium text-gray-900">서울특별시, 대한민국</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
