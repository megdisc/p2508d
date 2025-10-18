// src/entities/linkageRecord.ts

// 関係機関との連携記録を定義するインターフェース
export interface LinkageRecord {
  id: string; // 記録を一意に識別するためのID
  memberId: string; // 関連する利用者のID
  recordDate: string; // 記録日
  counterpart: string; // 連携相手（例: "母・花子様", "〇〇病院"）
  authorStaffId: string; // 記録者の職員ID
  content: string; // 連携内容
}