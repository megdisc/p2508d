// src/entities/memberSkill.ts

// 利用者ごとのスキル習得状況を管理するインターフェース
export interface MemberSkill {
  id: string; // この習得状況レコードを一意に識別するためのID
  memberId: string; // 対象となる利用者のID
  skillId: string; // 対象となるスキルのID (SkillNodeのIDを参照)
  currentLevelId: string; // 現在の習熟度レベルのID (MasterOptionを参照)
  acquisitionDate: string | null; // 習得日 (未習得などの場合はnull)
  memo: string; // メモや特記事項
}