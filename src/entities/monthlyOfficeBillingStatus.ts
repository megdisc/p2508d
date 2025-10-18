// src/entities/monthlyOfficeBillingStatus.ts

// 事業所ごとの月次の加算・減算の適用状況を記録するインターフェース
export interface MonthlyOfficeBillingStatus {
  id: string; // この記録を一意に識別するためのID
  officeId: string; // 対象となる事業所のID
  targetMonth: string; // 対象月 ('YYYY-MM')
  billingItemId: string; // 適用された加算・減算項目のID (BillingItemを参照)
  isApplicable: boolean; // 適用対象となったかどうか
  notes?: string; // 備考（例: "常勤換算で2.7名のため人員欠如減算"）
}