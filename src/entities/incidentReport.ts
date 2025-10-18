// src/entities/incidentReport.ts

// ヒヤリハット・事故報告のインターフェース定義
export interface IncidentReport {
  id: string; // 報告を一意に識別するためのID
  occurrenceDateTime: string; // 発生日時 (ISO 8601形式)
  typeId: string; // 報告の種別のID (MasterOptionを参照)
  reporterId: string; // 報告者の職員ID
  statusId: string; // 現在の対応状況のID (MasterOptionを参照)
  details: string; // 報告内容の詳細
}