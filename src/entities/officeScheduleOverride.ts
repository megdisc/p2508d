// src/entities/officeScheduleOverride.ts

export interface OfficeScheduleOverride {
  id: string;
  officeId: string;
  date: string;
  statusId: string; // '営業日' | '休業日' から変更 (MasterOptionを参照)
  startTime?: string;
  endTime?: string;
  note?: string;
}