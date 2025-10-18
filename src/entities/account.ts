// src/entities/account.ts

// 勘定科目の種別（収益、費用、資産など）
export type AccountType = 'revenue' | 'expense' | 'asset' | 'liability' | 'equity';

// 勘定科目（マスターデータ）を定義するインターフェース
export interface Account {
  id: string; // 勘定科目を一意に識別するためのID
  name: string; // 科目名（例: "売上", "給料手当", "水道光熱費"）
  type: AccountType; // 勘定科目の種別
  description?: string; // 説明（任意）
}