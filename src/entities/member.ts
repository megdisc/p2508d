// src/entities/member.ts

import type { Contact } from './contact';

// 利用者の基本情報のインターフェース定義
export interface Member {
  id: string; // この利用者情報（プロフィール）をシステム内で一意に識別するためのID
  authUserId: string | null; // Supabaseの認証アカウントID。マイページ機能を使わない利用者の場合はnullになります
  memberNumber: string; // 事業所が管理しやすいように付与する利用者番号
  birthday: string; // 利用者の生年月日（'YYYY-MM-DD'形式の文字列）
  statusId: string; // 現在の契約状況を示すID（MasterOptionエンティティを参照します）
  contractDate: string; // 事業所との利用契約を締結した日付（'YYYY-MM-DD'形式の文字列）
  assignedStaffId: string; // この利用者を主に担当する職員のID（Staffエンティティを参照します）
  wageLevelId: string; // 適用される工賃の等級レベルを示すID（WageLevelエンティティを参照します）
  
  // 利用者本人の連絡先情報（住所、電話番号など）
  contact: Contact;

  // 障害や医療に関する、支援上必要な情報
  disabilityInfo: {
    disabilityCategoryIds: string[]; // 該当する障害種別のIDリスト（DisabilityCategoryエンティティを参照します）
    specialConsiderations?: string; // 支援を行う上で特に配慮すべき事項（任意項目）
    medications?: string; // 服薬に関する情報（任意項目）
    allergies?: string; // アレルギーに関する情報（任意項目）
  };

  // benefitCardオブジェクトは削除され、BenefitCertificateエンティティとして独立管理されます
}