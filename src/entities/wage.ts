// src/entities/wage.ts

// 工賃の計算方式を定義する型エイリアス
export type WageCalculationType = 'hourly' | 'piece-rate' | 'mixed';

// 時間の計算単位を定義する型エイリアス
export type TimeUnit = 'minute' | 'hour' | 'day';

// --- ここから追加 ---
// 端数処理の方法を定義する型エイリアス
export type RoundingMethod = 'round_down' | 'round_up' | 'round_off';

// 端数処理を行う単位を定義する型エイリアス
export type RoundingUnit = 1 | 10 | 100;
// --- ここまで追加 ---

// 事業所の工賃計算体系を定義するインターフェース
export interface WageSystem {
  id: string; // この計算体系を一意に識別するためのID
  calculationType: WageCalculationType; // 計算方式（時給、成果報酬、またはその混合か）
  timeUnit: TimeUnit; // 時間の計算単位（分単位、時間単位、日単位か）

  // --- ここから追加 ---
  // 最終的な支払額の端数処理方法
  rounding: {
    method: RoundingMethod; // 切り捨て、切り上げ、四捨五入
    unit: RoundingUnit;     // どの単位で端数を処理するか（1円、10円など）
  };
  // --- ここまで追加 ---
}