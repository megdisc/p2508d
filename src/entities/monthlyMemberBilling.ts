// src/entities/monthlyMemberBilling.ts

export interface MonthlyMemberBilling {
  id: string;
  memberId: string;
  officeId: string;
  targetMonth: string;
  baseRewardUnits: number;
  additionUnits: number;
  deductionUnits: number;
  totalUnits: number;
  billingStatusId: string; // 'pending' | 'confirmed' | 'invoiced' から変更 (MasterOptionを参照)
}