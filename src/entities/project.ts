// src/entities/project.ts

// 案件情報のインターフェース定義
export interface Project {
  id: string; // 案件を一意に識別するためのID
  name: string; // 案件名
  clientId: string; // 顧客（クライアント）のID
  statusId: string; // 現在のステータスのID (MasterOptionを参照)
  assignedStaffId: string; // 担当職員のID
  orderDate: string; // 受注日
  deliveryDate: string; // 納期
  workContent: string; // 作業内容の詳細な説明
}