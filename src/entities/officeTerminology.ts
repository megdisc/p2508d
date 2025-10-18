// src/entities/officeTerminology.ts

// システム内で定義された、カスタマイズ可能な用語のキー
export type TerminologySystemKey =
  | 'term_member' // 利用者
  | 'term_staff' // 職員
  | 'term_client' // 顧客
  | 'term_partner' // 外注先
  | 'term_project' // 生産活動
  | 'term_wage' // 工賃
  | 'term_base_wage' // 基本工賃
  | 'term_addition' // 加算
  | 'term_deduction' // 控除
  | 'term_support_plan' // 個別支援計画
  | 'term_daily_log' // 業務日誌
  | 'term_incident_report' // ヒヤリハット・事故報告
  | 'term_support_consultant' // 相談支援専門員
  | 'term_office'; // 事業所

// 事業所ごとの用語設定を定義するインターフェース
export interface OfficeTerminology {
  id: string; // この設定を一意に識別するためのID
  officeId: string; // 対象となる事業所のID (Officeを参照)
  systemKey: TerminologySystemKey; // システム内部で使う用語のキー
  customValue: string; // 事業所が設定する表示名
}