// src/entities/disabilityCertificateType.ts

// 障害者手帳の種類（マスターデータ）を定義するインターフェース
export interface DisabilityCertificateType {
  id: string; // 手帳種別を一意に識別するためのID
  name: string; // 手帳の正式名称（例: "身体障害者手帳", "精神障害者保健福祉手帳"）
  description?: string; // 説明（任意）
}