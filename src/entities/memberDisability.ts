// src/entities/memberDisability.ts

// 利用者と具体的な障害・疾病の関連を定義するインターフェース
export interface MemberDisability {
  id: string; // この情報を一意に識別するためのID
  memberId: string; // 対象となる利用者のID
  disabilityName: string; // 具体的な障害・疾病名
  diagnosisDate?: string; // 診断日（任意）
  notes?: string; // 関連するメモ（任意）
}