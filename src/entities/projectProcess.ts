// src/entities/projectProcess.ts

// 案件の工程を定義するインターフェース
export interface ProjectProcess {
  id: string; // 工程を一意に識別するためのID
  projectId: string; // 親となる案件のID
  processNumber: number; // 工程番号
  name: string; // 工程名（例: "チラシ折り", "封入"）
  assignedMemberIds: string[]; // 担当利用者のIDリスト
  progressStatus: string; // 進捗状況（例: "完了", "作業中 50%"）
  estimatedHours: number; // 予定作業時間
  actualHours?: number; // 実作業時間
}