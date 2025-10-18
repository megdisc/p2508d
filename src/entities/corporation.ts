// src/entities/corporation.ts

// 連絡先の型定義をインポート
import type { Contact } from './contact';

// 運営法人情報のインターフェース定義
export interface Corporation {
  id: string; // 法人を一意に識別するためのID
  corporateNumber: string; // 法人番号
  representativeName: string; // 代表者名
  establishmentDate: string; // 設立年月日 (ISO 8601形式の文字列 'YYYY-MM-DD')
  
  // 法人の連絡先情報
  contact: Contact;
}