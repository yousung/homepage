'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  INQUIRY_TYPES,
  WEB3FORMS_ENDPOINT,
  buildWeb3FormsPayload,
  contactSchema,
  type ContactFormValues,
} from '@/lib/contactForm';

type Status = 'idle' | 'success' | 'error';

const inputClass =
  'w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text placeholder:text-brand-text-muted/60 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 text-xs text-red-600">
      {message}
    </p>
  );
}

export default function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { inquiryType: undefined, phone: '', company: '', botcheck: '' },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('idle');
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(buildWeb3FormsPayload(values)),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !data?.success) throw new Error('submit failed');
      reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl border border-brand-border bg-white p-8 text-center">
        <p className="text-lg font-bold text-brand-text">문의가 접수되었습니다.</p>
        <p className="mt-2 text-sm text-brand-text-muted">입력하신 이메일로 24시간 내에 답변드리겠습니다.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover"
        >
          추가 문의하기
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="문의하기"
      className="space-y-5 rounded-2xl border border-brand-border bg-white p-6 text-left sm:p-8"
    >
      {/* honeypot */}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register('botcheck')} />

      <div>
        <label htmlFor="inquiryType" className="mb-1.5 block text-sm font-semibold text-brand-text">
          문의 유형 <span className="text-brand-accent">*</span>
        </label>
        <select id="inquiryType" className={inputClass} defaultValue="" {...register('inquiryType')}>
          <option value="" disabled>
            선택해주세요
          </option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <FieldError message={errors.inquiryType?.message} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-text">
            이름 <span className="text-brand-accent">*</span>
          </label>
          <input id="name" autoComplete="name" className={inputClass} {...register('name')} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-text">
            이메일 <span className="text-brand-accent">*</span>
          </label>
          <input id="email" type="email" autoComplete="email" className={inputClass} {...register('email')} />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-text">
            연락처
          </label>
          <input id="phone" type="tel" autoComplete="tel" placeholder="010-0000-0000" className={inputClass} {...register('phone')} />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-brand-text">
            회사명
          </label>
          <input id="company" autoComplete="organization" className={inputClass} {...register('company')} />
          <FieldError message={errors.company?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-text">
          문의 내용 <span className="text-brand-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="프로젝트 내용, 필요한 기능, 참고 사이트 등을 자유롭게 적어주세요."
          className={`${inputClass} resize-y`}
          {...register('message')}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-brand-text-muted">
          <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-brand-border accent-brand-accent" {...register('consent')} />
          <span>
            문의 응대를 위한{' '}
            <Link href="/privacy-policy" target="_blank" className="font-semibold text-brand-text underline">
              개인정보 수집·이용
            </Link>
            에 동의합니다. <span className="text-brand-accent">*</span>
          </span>
        </label>
        <FieldError message={errors.consent?.message} />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          전송에 실패했습니다. 잠시 후 다시 시도하시거나{' '}
          <a href={`mailto:${fallbackEmail}`} className="font-semibold underline">
            {fallbackEmail}
          </a>
          로 메일 주세요.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? '전송 중…' : '문의 보내기'}
      </button>
    </form>
  );
}
