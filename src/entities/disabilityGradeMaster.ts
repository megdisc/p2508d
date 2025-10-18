// src/entities/disabilityGradeMaster.ts

// 障害支援区分（マスターデータ）を定義するインターフェース
export interface DisabilityGradeMaster {
  id: string; // 区分を一意に識別するためのID
  name: string; // 区分名（例: "区分6", "区分5", "該当なし"）
}