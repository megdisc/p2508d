// src/entities/staff.ts

import type { Contact } from './contact';

// 職員情報のインターフェース定義
export interface Staff {
  id: string; // 職員プロフィール情報を一意に識別するためのID
  authUserId: string; // 対応する認証ユーザーのID (AuthUserを参照)
  employmentTypeId: string; // 雇用形態のID (MasterOptionを参照)
  hireDate: string; // 入社日 (ISO 8601形式の文字列 'YYYY-MM-DD')
  
  // 職員の連絡先情報
  contact: Contact;
}