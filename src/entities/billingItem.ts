// src/entities/billingItem.ts

// 請求項目の種別を定義する型エイリアス
export type BillingItemType = 'base_reward' | 'addition' | 'deduction';

// 国保連請求の項目（基本報酬・加算・減算）のマスターデータを定義するインターフェース
export interface BillingItem {
  id: string; // 項目を一意に識別するためのID
  name: string; // 項目の名称（例: "欠席時対応加算", "人員欠如減算"）
  type: BillingItemType; // 種別（基本報酬、加算、減算）
  unit: number; // 単位数（点数）
  description?: string; // 算定要件などの説明
}