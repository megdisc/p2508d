// src/entities/wageItem.ts

// 工賃項目の種別を定義する型エイリアス
export type WageItemType = 'addition' | 'deduction';

// 工賃項目の計算頻度を定義する型エイリアス
export type CalculationFrequency = 'daily' | 'monthly' | 'one-time';

// --- ここから追加 ---
// 手当の計算ロジックを定義するための型
export type AttendanceMetric = 'attendance_days' | 'absence_days' | 'attendance_rate';
export type Operator = 'equals' | 'less_than' | 'less_than_or_equal' | 'greater_than' | 'greater_than_or_equal';

// 勤怠ベースの計算ルールを定義するインターフェース
export interface AttendanceRule {
  metric: AttendanceMetric; // 計算に使う指標（利用日数、欠席日数、利用率など）
  operator: Operator;       // 比較演算子（～と等しい、～以下など）
  threshold: number;        // 判定のしきい値（例: 欠席日数が'0'日'以下'）
}
// --- ここまで追加 ---

// 工賃の加算・控除項目（マスターデータ）を定義するインターフェース
export interface WageItem {
  id: string; // 項目を一意に識別するためのID
  name: string; // 項目の名称（例: "皆勤手当", "昼食代"）
  type: WageItemType; // 種別（加算か控除か）
  frequency: CalculationFrequency; // 計算頻度（日割、月割、または一回きりか）
  defaultAmount?: number; // デフォルトの金額（固定額の場合）
  isTaxable: boolean; // 課税対象かどうか
  isDefault: boolean; // 全利用者にデフォルトで適用される項目か

  // --- 変更点 ---
  // この項目が適用されるための勤怠条件（設定されていれば、このルールを満たす必要がある）
  attendanceRule?: AttendanceRule;
}