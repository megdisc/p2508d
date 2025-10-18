// src/entities/staffSalary.ts

// 職員ごとの給与体系を定義するインターフェース
export interface StaffSalary {
  id: string; // この給与設定を一意に識別するためのID
  staffId: string; // 対象となる職員のID
  baseSalary: number; // 基本給（月給）
  
  // その他、役職手当や資格手当などをここに直接追加することも、
  // MemberWageItemのように別エンティティで管理することも可能
  positionAllowance?: number; // 役職手当
  qualificationAllowance?: number; // 資格手当
  
  effectiveDate: string; // この給与体系の適用開始日
}