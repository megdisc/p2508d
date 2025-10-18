// src/entities/payrollStatement.ts

// 給与明細の個別の行を表すインターフェース
export interface PayrollStatementDetail {
  name: string; // 項目の名称（例: "基本給", "健康保険料"）
  type: 'earning' | 'deduction'; // 種別（支給か控除か）
  amount: number; // 金額
}

// 職員ごとの月々の給与支払明細を定義するインターフェース
export interface PayrollStatement {
  id: string; // この明細を一意に識別するためのID
  staffId: string; // 対象となる職員のID
  targetMonth: string; // 対象月 ('YYYY-MM')
  paymentDate: string; // 支払日 ('YYYY-MM-DD')
  
  // 明細の各項目
  details: PayrollStatementDetail[];
  
  // 計算結果サマリー
  totalEarnings: number; // 総支給額
  totalDeductions: number; // 控除合計額
  netPayment: number; // 差引支給額
}