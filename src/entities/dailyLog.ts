// src/entities/dailyLog.ts

// 特定の利用者に関する個別の記録
export interface MemberObservation {
  memberId: string; // 対象となる利用者のID
  content: string; // 利用者の様子や記録内容
}

// 業務日誌情報のインターフェース定義
export interface DailyLog {
  id: string; // 日誌を一意に識別するためのID
  date: string; // 対象となる日付 (ISO 8601形式の文字列 'YYYY-MM-DD')
  authorId: string; // 記録者の職員ID
  specialNotes: string; // その日の特記事項（複数行のテキスト）
  
  // 利用者ごとの様子の記録（配列で複数人を記録可能）
  observations: MemberObservation[];
}