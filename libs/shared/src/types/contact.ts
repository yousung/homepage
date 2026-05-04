export interface Contact {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt: string;
}

export interface ContactCreateInput {
  name: string;
  email: string;
  company?: string;
  message: string;
}

