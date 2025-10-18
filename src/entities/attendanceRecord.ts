// src/entities/attendanceRecord.ts

// 利用者ごとの日々の利用記録を管理するインターフェース
export interface AttendanceRecord {
  id: string; // この記録を一意に識別するためのID
  memberId: string; // 対象となる利用者のID
  officeId: string; // 利用した事業所のID
  date: string; // 対象となる日付 (ISO 8601形式 'YYYY-MM-DD')
  statusId: string; // 利用状況のID (MasterOptionを参照)
  
  // 以下は実績として記録される情報
  actualStartTime?: string; // 実際の利用開始時刻 ('HH:MM'形式)
  actualEndTime?: string; // 実際の利用終了時刻 ('HH:MM'形式)
  breakDuration?: string; // 休憩時間（例: "1時間00分" or 60 (分)）
  hasLunch: boolean; // 給食利用の有無
  healthStatus?: string; // 体調に関するメモ
  notes?: string; // その他の特記事項
}