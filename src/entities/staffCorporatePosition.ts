// src/entities/staffCorporatePosition.ts

// 職員と法人役職の関連付けを定義するインターフェース
export interface StaffCorporatePosition {
  id: string; // この関連を一意に識別するためのID
  staffId: string; // 対象となる職員のID (Staffを参照)
  positionId: string; // 割り当てられる法人役職のID (CorporatePositionを参照)
  startDate: string; // 就任日
  endDate?: string; // 退任日（任意）
}