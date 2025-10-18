// src/entities/address.ts

// 住所情報を表す再利用可能なインターフェース
export interface Address {
  postalCode: string; // 郵便番号
  prefecture: string; // 都道府県
  city: string; // 市区町村
  street: string; // それ以降の住所（番地など）
  building?: string; // 建物名など（任意）
}