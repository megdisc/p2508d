// src/entities/contact.ts

// 住所の型定義をインポート
import type { Address } from './address';

// 連絡先情報を表す再利用可能なインターフェース
export interface Contact {
  id: string; // 連絡先情報を一意に識別するためのID
  name: string; // 氏名または企業等の名称
  nameKana?: string; // 氏名または名称のふりがな（任意）
  phoneNumber?: string; // 電話番号（任意）
  faxNumber?: string; // FAX番号（任意）
  email?: string; // メールアドレス（任意）
  address?: Address; // 住所情報（任意）
}