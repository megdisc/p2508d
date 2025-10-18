// src/entities/corporatePosition.ts

// 法人内の役職（マスターデータ）を定義するインターフェース
export interface CorporatePosition {
  id: string; // 役職を一意に識別するためのID
  name: string; // 役職名（例: "代表理事", "部長", "課長"）
  description?: string; // 職務内容などの説明（任意）
}