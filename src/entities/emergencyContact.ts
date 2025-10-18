// src/entities/emergencyContact.ts

// 連絡先の型定義をインポート
import type { Contact } from './contact';

// 利用者の緊急連絡先情報のインターフェース定義
export interface EmergencyContact {
  id: string; // 緊急連絡先情報を一意に識別するためのID
  memberId: string; // 対象となる利用者のID
  relationship: string; // 利用者本人との続柄
  priority: number; // 連絡の優先順位（1が最も高いなど）
  
  // 連絡先の詳細情報
  contact: Contact;
}