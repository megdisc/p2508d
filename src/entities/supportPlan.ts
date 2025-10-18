// src/entities/supportPlan.ts

export interface SupportPlan {
  id: string;
  memberId: string;
  creationDate: string;
  authorStaffId: string;
  userAspirations: string;
  longTermGoals: string;
  shortTermGoals: string;
  statusId: string; // 'active' | 'archived' から変更 (MasterOptionを参照)
}