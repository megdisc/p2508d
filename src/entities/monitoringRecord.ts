// src/entities/monitoringRecord.ts

// モニタリング記録を定義するインターフェース
export interface MonitoringRecord {
  id: string; // 記録を一意に識別するためのID
  supportPlanId: string; // 関連する個別支援計画のID
  recordDate: string; // 記録日
  authorStaffId: string; // 記録者の職員ID
  content: string; // モニタリング内容（達成度、本人の様子など）
}