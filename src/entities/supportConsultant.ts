// src/entities/supportConsultant.ts

import type { Contact } from './contact';

// 相談支援専門員や関連機関の情報を定義するインターフェース
export interface SupportConsultant {
  id: string; // 情報を一意に識別するためのID
  officeName: string; // 所属する相談支援事業所名
  
  // 担当者の連絡先情報
  contact: Contact;
}