// src/entities/contact.ts

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  firstNameKana?: string;
  lastNameKana?: string;
  birthday?: string | null; // ★ 修正: | null を追加
  genderId?: string;
  phone?: string;
  email?: string;
  faxNumber?: string;
  postalCode?: string;
  addressId?: string;
  memo?: string;
  createdAt: string;
  updatedAt: string;
}