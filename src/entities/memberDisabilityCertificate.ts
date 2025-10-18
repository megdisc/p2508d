// src/entities/memberDisabilityCertificate.ts

// 利用者が所持する障害者手帳の情報を定義するインターフェース
export interface MemberDisabilityCertificate {
  id: string; // この手帳情報を一意に識別するためのID
  memberId: string; // 対象となる利用者のID (Memberを参照)
  certificateTypeId: string; // 手帳の種類のID (DisabilityCertificateTypeを参照)
  grade: string; // 等級（例: "1級", "A判定"）
  issueDate: string; // 交付日 ('YYYY-MM-DD'形式)
  issuer: string; // 交付元（例: "〇〇市"）
  notes?: string; // 備考（任意）
}