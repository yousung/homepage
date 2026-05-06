'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, '이름을 입력해주세요').max(100, '이름은 100자 이하여야 합니다'),
  email: z.string().min(1, '이메일을 입력해주세요').email('올바른 이메일 형식이 아닙니다'),
  company: z.string().max(100, '회사명은 100자 이하여야 합니다').optional(),
  message: z
    .string()
    .min(1, '메시지를 입력해주세요')
    .max(5000, '메시지는 5000자 이하여야 합니다'),
});

type FormValues = z.infer<typeof schema>;

type SubmitState = 'idle' | 'success';

type ContactFormProps = {
  contactEmail: string;
};

export default function ContactForm({ contactEmail }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`[Lovizu 홈페이지 문의] ${data.name}`);
    const bodyLines = [
      `이름: ${data.name}`,
      `이메일: ${data.email}`,
      data.company ? `회사: ${data.company}` : '',
      '',
      data.message,
    ].filter((line) => line !== undefined);
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubmitState('success');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          이름 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register('name')}
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500/20 ${
            errors.name
              ? 'border-red-400 bg-red-50 focus:border-red-400'
              : 'border-gray-200 bg-white focus:border-blue-400'
          }`}
          placeholder="홍길동"
        />
        {errors.name && (
          <p role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          이메일 <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email')}
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500/20 ${
            errors.email
              ? 'border-red-400 bg-red-50 focus:border-red-400'
              : 'border-gray-200 bg-white focus:border-blue-400'
          }`}
          placeholder="hong@example.com"
        />
        {errors.email && (
          <p role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company (optional) */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
          회사명 <span className="text-gray-400 text-xs font-normal">(선택)</span>
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          {...register('company')}
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500/20 ${
            errors.company
              ? 'border-red-400 bg-red-50 focus:border-red-400'
              : 'border-gray-200 bg-white focus:border-blue-400'
          }`}
          placeholder="Lov Corp"
        />
        {errors.company && (
          <p role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          메시지 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${
            errors.message
              ? 'border-red-400 bg-red-50 focus:border-red-400'
              : 'border-gray-200 bg-white focus:border-blue-400'
          }`}
          placeholder="어떤 프로젝트를 함께하고 싶으신가요?"
        />
        {errors.message && (
          <p role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Success */}
      {submitState === 'success' && (
        <div role="status" className="p-4 rounded-xl bg-green-50 border border-green-200 text-sm text-green-700 flex items-center gap-2">
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          메일 앱이 열렸습니다. 메일이 열리지 않으면{' '}
          <a
            href={`mailto:${contactEmail}`}
            className="underline font-medium"
          >
            {contactEmail}
          </a>
          으로 직접 보내주세요.
        </div>
      )}

      <button
        type="submit"
        className="w-full py-4 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
      >
        문의 보내기
      </button>
    </form>
  );
}
