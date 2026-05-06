const DEFAULT_CONTACT_EMAIL = 'support@lovizu.com';

export function getContactEmail(): string {
  const envEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return envEmail && envEmail.length > 0 ? envEmail : DEFAULT_CONTACT_EMAIL;
}
