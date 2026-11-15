import { z } from 'zod';

// Web3Forms access key는 클라이언트 노출을 전제로 설계된 공개 키입니다 (수신 이메일에 바인딩).
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || '';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
// Web3Forms 무료 플랜 전용 hCaptcha sitekey (https://docs.web3forms.com — hCaptcha)
export const WEB3FORMS_HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';

export const INQUIRY_TYPES = ['홈페이지 제작', '호스팅 플랜', '케어 플랜', 'IT 컨설팅', '기타'] as const;

export const contactSchema = z.object({
  inquiryType: z.enum(INQUIRY_TYPES, { message: '문의 유형을 선택해주세요.' }),
  name: z.string().trim().min(1, '이름을 입력해주세요.').max(50, '이름은 50자 이내로 입력해주세요.'),
  email: z.string().trim().email('올바른 이메일 주소를 입력해주세요.'),
  phone: z
    .string()
    .trim()
    .max(20, '연락처는 20자 이내로 입력해주세요.')
    .regex(/^[0-9+\-\s()]*$/, '숫자와 - 만 입력해주세요.')
    .optional()
    .or(z.literal('')),
  company: z.string().trim().max(100, '회사명은 100자 이내로 입력해주세요.').optional().or(z.literal('')),
  message: z.string().trim().min(10, '문의 내용을 10자 이상 입력해주세요.').max(3000, '문의 내용은 3000자 이내로 입력해주세요.'),
  consent: z.literal(true, { message: '개인정보 수집·이용에 동의해주세요.' }),
  // honeypot: 사람은 비워둠
  botcheck: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function buildWeb3FormsPayload(values: ContactFormValues, captchaToken: string) {
  return {
    access_key: WEB3FORMS_ACCESS_KEY,
    'h-captcha-response': captchaToken,
    subject: `[Lovizu 문의] ${values.inquiryType} - ${values.name}`,
    from_name: 'Lovizu 홈페이지',
    replyto: values.email,
    botcheck: values.botcheck ?? '',
    문의유형: values.inquiryType,
    이름: values.name,
    이메일: values.email,
    연락처: values.phone || '-',
    회사명: values.company || '-',
    문의내용: values.message,
  };
}
