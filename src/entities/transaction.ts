// src/entities/transaction.ts

// 取引の種別
export type TransactionType = 'income' | 'expense' | 'transfer';

// すべての金銭取引を記録するインターフェース
export interface Transaction {
  id: string; // 取引を一意に識別するためのID
  officeId: string; // この取引に関連する事業所のID
  date: string; // 取引日 (ISO 8601形式 'YYYY-MM-DD')
  type: TransactionType; // 取引種別（収入、支出、振替）
  accountId: string; // 勘定科目のID (Accountを参照)
  amount: number; // 金額（円）
  
  // 関連情報
  relatedProjectId?: string; // 関連する案件のID（任意）
  relatedClientId?: string; // 関連する顧客のID（任意）
  relatedSupplierId?: string; // 関連する外注先のID（任意）
  
  notes?: string; // 備考
}