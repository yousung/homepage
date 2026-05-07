const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'help@lovizu.com';

export function getContactEmail(): string {
  return CONTACT_EMAIL;
}
