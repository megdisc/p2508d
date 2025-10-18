// src/entities/disabilityCategory.ts

// 障害・疾病の種別（マスターデータ）を定義するインターフェース
export interface DisabilityCategory {
  id: string; // 種別を一意に識別するためのID
  name: string; // 種別の名称（例: "知的障害", "精神障害", "身体障害", "難病"）
  description?: string; // 説明（任意）
}