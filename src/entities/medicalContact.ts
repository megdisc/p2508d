// src/entities/medicalContact.ts

import type { Contact } from './contact';

// 医療機関の情報を定義するインターフェース
export interface MedicalContact {
  id: string; // 医療機関情報を一意に識別するためのID
  hospitalName: string; // 病院・クリニック名
  specialty?: string; // 診療科（例: "精神科", "内科"）
  
  // 担当医の連絡先情報（病院の連絡先と共通の場合も想定）
  contact: Contact;
}