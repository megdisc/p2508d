// src/entities/memberMedicalContact.ts

// 利用者と医療機関の関連を定義するインターフェース
export interface MemberMedicalContact {
  id: string; // この関連を一意に識別するためのID
  memberId: string; // 対象となる利用者のID
  medicalContactId: string; // 関連する医療機関のID
  role: string; // 医療機関の役割（例: "主治医", "専門医"）
  notes?: string; // 備考
}