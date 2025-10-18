// src/entities/wageLevel.ts

// 工賃レベル（等級）を定義するインターフェース
export interface WageLevel {
  id: string; // レベルを一意に識別するためのID
  officeId: string; // このレベルが適用される事業所のID
  level: number; // 等級（例: 1, 2, 3）
  name: string; // レベルの名称（例: "研修生", "標準", "リーダー"）
  hourlyRate: number; // このレベルの時間単価（円）
  description?: string; // レベルに関する説明
}