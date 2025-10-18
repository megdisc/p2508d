// src/entities/supplier.ts

import type { Contact } from './contact';

// 外注先（サプライヤー）情報のインターフェース定義
export interface Supplier {
  id: string; // 外注先を一意に識別するためのID
  lastTransactionDate: string; // 最終取引日
  
  // 外注先の連絡先情報
  contact: Contact;
}