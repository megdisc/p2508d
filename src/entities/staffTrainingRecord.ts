// src/entities/staffTrainingRecord.ts

export interface StaffTrainingRecord {
  id: string;
  staffId: string;
  trainingName: string;
  completionDate: string;
  trainingTypeId: string; // 'internal' | 'external' から変更 (MasterOptionを参照)
  notes?: string;
}