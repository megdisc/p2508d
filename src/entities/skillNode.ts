// src/entities/skillNode.ts

// スキルツリーの各ノード（階層）を定義するインターフェース
export interface SkillNode {
  id: string; // ノードを一意に識別するためのID
  name: string; // このノードの名称（例: "PC作業", "データ入力", "PCデータ入力"）
  parentId: string | null; // 親ノードのID。最上位のノード（ジャンル）の場合はnull
  
  // このノードが最終的な「スキル」（葉ノード）である場合にのみ設定される
  // 適用可能な習熟度レベルのIDリスト (MasterOptionを参照)
  definedLevelIds?: string[];
}