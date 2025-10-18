// src/entities/dailyBillingRecord.ts

// 日々の利用実績に紐づく請求項目（加算・減算）の記録を定義するインターフェース
export interface DailyBillingRecord {
  id: string; // この記録を一意に識別するためのID
  attendanceRecordId: string; // 関連する利用実績レコードのID (AttendanceRecordを参照)
  billingItemId: string; // 適用された請求項目のID (BillingItemを参照)
  notes?: string; // 適用理由などの備考（例: "電話にてご家族と状況確認"）
}