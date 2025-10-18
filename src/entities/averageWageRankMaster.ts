// src/entities/averageWageRankMaster.ts

// 平均工賃ランク（マスターデータ）を定義するインターフェース
export interface AverageWageRankMaster {
  id: string; // ランクを一意に識別するためのID
  name: string; // ランク名（例: "1万円以上", "1万円未満"）
}