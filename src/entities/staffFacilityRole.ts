// src/entities/staffFacilityRole.ts

// 職員と事業所専門職の関連付けを定義するインターフェース
export interface StaffFacilityRole {
  id: string; // この関連を一意に識別するためのID
  staffId: string; // 対象となる職員のID (Staffを参照)
  roleId: string; // 割り当てられる専門職のID (FacilityRoleを参照)
  officeId: string; // 勤務する事業所のID (Officeを参照)
  startDate: string; // 就任日
  endDate?: string; // 退任日（任意）
}