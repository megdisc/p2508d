// src/entities/client.ts

import type { Contact } from './contact';

// 顧客（クライアント）情報のインターフェース定義
export interface Client {
  id: string; // 顧客を一意に識別するためのID
  lastTransactionDate: string; // 最終取引日
  
  // 顧客の連絡先情報
  contact: Contact;
}