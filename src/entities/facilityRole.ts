// src/entities/facilityRole.ts

// 事業所における専門職（マスターデータ）を定義するインターフェース
export interface FacilityRole {
  id: string; // 専門職を一意に識別するためのID
  name: string; // 専門職名（例: "管理者", "サービス管理責任者", "職業指導員"）
  description?: string; // 役割や資格要件などの説明（任意）
}