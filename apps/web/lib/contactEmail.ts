const DEFAULT_CONTACT_EMAIL = 'hello@example.com';

export function getContactEmail(): string {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? DEFAULT_CONTACT_EMAIL;
}
