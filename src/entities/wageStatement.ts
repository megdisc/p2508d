// src/entities/wageStatement.ts

// 工賃明細の個別の行を表すインターフェース
export interface WageStatementDetail {
  wageItemId: string; // WageItemのID
  itemName: string; // 項目の名称（WageItemからコピー）
  itemType: 'addition' | 'deduction'; // 種別（加算か控除か）
  unitPrice: number; // 単価
  quantity: number; // 数量（日数や回数など）
  totalAmount: number; // 合計額 (単価 * 数量)
  note?: string; // 備考
}

// 利用者ごとの月々の工賃支払明細を定義するインターフェース
export interface WageStatement {
  id: string; // この明細を一意に識別するためのID
  memberId: string; // 対象となる利用者のID
  officeId: string; // 対象となる事業所のID
  targetMonth: string; // 対象月 (ISO 8601形式 'YYYY-MM')
  paymentDate: string; // 支払日 (ISO 8601形式 'YYYY-MM-DD')
  
  // 工賃計算の基礎情報
  totalAttendanceDays: number; // 総利用日数
  totalWorkHours: number; // 総作業時間（分 or 時間）
  
  // 基本工賃
  baseWage: number;
  
  // 加算・控除の明細
  additions: WageStatementDetail[];
  deductions: WageStatementDetail[];
  
  // 計算結果サマリー
  grossWage: number; // 総支給額 (基本工賃 + 加算合計)
  totalDeductions: number; // 控除合計額
  netPayment: number; // 差引支給額 (総支給額 - 控除合計額)
}