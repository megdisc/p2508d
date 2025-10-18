// src/entities/masterOption.ts

export type MasterCategory = 
  | 'MEMBER_STATUS'
  | 'EMPLOYMENT_TYPE'
  | 'PROJECT_STATUS'
  | 'REPORT_TYPE'
  | 'REPORT_STATUS'
  | 'ATTENDANCE_STATUS'
  | 'USER_ROLE'
  | 'PROFICIENCY_LEVEL'
  | 'BILLING_STATUS'          // 追加
  | 'OFFICE_DAY_STATUS'       // 追加
  | 'STAFF_ATTENDANCE_STATUS' // 追加
  | 'TRAINING_TYPE'           // 追加
  | 'SUPPORT_PLAN_STATUS';    // 追加

export interface MasterOption {
  id: string;
  category: MasterCategory;
  key: string;
  value: string;
  order: number;
}