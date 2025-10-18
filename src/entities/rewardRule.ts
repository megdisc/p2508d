// src/entities/rewardRule.ts

// 基本報酬の算定ルール（マスターデータ）を定義するインターフェース
export interface RewardRule {
  id: string; // ルールを一意に識別するためのID
  
  // --- ルールが適用されるための条件（すべてIDで参照） ---
  staffingRatioId: string | null; // 人員配置区分のID (StaffingRatioMasterを参照)
  averageWageRankId: string | null; // 平均工賃ランクのID (AverageWageRankMasterを参照)
  disabilityGradeId: string | null; // 利用者の障害支援区分のID (DisabilityGradeMasterを参照)
  
  // --- 適用される結果 ---
  billingItemId: string; // この条件を満たした場合に適用される基本報酬のID (BillingItemを参照)
}