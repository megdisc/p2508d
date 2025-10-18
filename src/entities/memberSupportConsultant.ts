// src/entities/memberSupportConsultant.ts

// 利用者と相談支援専門員の関連を定義するインターフェース
export interface MemberSupportConsultant {
  id: string; // この関連を一意に識別するためのID
  memberId: string; // 対象となる利用者のID
  supportConsultantId: string; // 関連する相談支援専門員のID
  role: string; // 担当の役割（例: "主担当", "前任者"）
  startDate: string; // 担当開始日
  endDate?: string; // 担当終了日（任意）
}