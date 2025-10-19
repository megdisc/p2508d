// src/entities/contact.ts

export interface Contact {
  id: string;
  name: string;
  nameKana?: string;
  birthday?: string; // ★ 追加
  genderId?: string;
  phone?: string;
  email?: string;
  postalCode?: string;
  addressId?: string;
  memo?: string;
  createdAt: string;
  updatedAt: string;
}