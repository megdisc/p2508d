// src/entities/contact.ts

export interface Contact {
  id: string;
  // 🔽 name を firstName と lastName に分割
  firstName: string;
  lastName: string;
  firstNameKana?: string;
  lastNameKana?: string;
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