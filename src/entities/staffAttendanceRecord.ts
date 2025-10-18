// src/entities/staffAttendanceRecord.ts

export interface StaffAttendanceRecord {
  id: string;
  staffId: string;
  officeId: string;
  workDate: string;
  statusId: string; // 'present' | 'absent' | 'paid_leave' から変更 (MasterOptionを参照)
  startTime?: string;
  endTime?: string;
}