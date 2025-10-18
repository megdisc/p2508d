// src/entities/memberWageItem.ts

// 利用者に個別に適用される加算・控除項目を定義するインターフェース
export interface MemberWageItem {
  id: string; // この設定を一意に識別するためのID
  memberId: string; // 対象となる利用者のID
  wageItemId: string; // 適用する工賃項目のID (WageItemを参照)
  amount: number; // 適用する金額（WageItemのデフォルト額を上書きする場合）
  startDate: string; // 適用開始日 (ISO 8601形式 'YYYY-MM-DD')
  endDate?: string; // 適用終了日（任意）
  notes?: string; // 備考
}