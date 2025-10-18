// src/entities/interviewRecord.ts

// 面談記録を定義するインターフェース
export interface InterviewRecord {
  id: string; // 記録を一意に識別するためのID
  memberId: string; // 対象となる利用者のID
  interviewDate: string; // 面談日
  interviewerStaffId: string; // 面談実施者の職員ID
  interviewType: string; // 面談種別（例: "定期面談", "随時面談"）
  content: string; // 面談内容
}