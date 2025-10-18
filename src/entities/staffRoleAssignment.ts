// src/entities/staffRoleAssignment.ts

// 職員と役職の関連付けを定義するインターフェース
export interface StaffRoleAssignment {
  id: string; // この関連を一意に識別するためのID
  staffId: string; // 対象となる職員のID (Staffを参照)
  roleId: string; // 割り当てられる役職のID (StaffRoleを参照)
  startDate: string; // その役職への就任日
  endDate?: string; // その役職からの退任日（任意）
}