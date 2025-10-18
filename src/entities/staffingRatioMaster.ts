// src/entities/staffingRatioMaster.ts

// 人員配置区分（マスターデータ）を定義するインターフェース
export interface StaffingRatioMaster {
  id: string; // 区分を一意に識別するためのID
  name: string; // 名称（例: "7.5:1", "10:1"）
}