// src/entities/benefitCertificate.ts

// 障害福祉サービス受給者証の情報を定義するインターフェース
export interface BenefitCertificate {
  id: string; // この受給者証情報を一意に識別するためのID
  memberId: string; // 対象となる利用者のID (Memberを参照)
  effectiveStartDate: string; // サービス利用の支給決定期間の開始日
  effectiveEndDate: string; // サービス利用の支給決定期間の終了日
  copaymentRate: number; // 利用者負担額の算定に使われる負担割合（例: 1割負担なら1）
  copaymentLimit: number; // ひと月あたりの利用者負担額の上限（円）
  issuer: string; // 交付元（市区町村名）
}