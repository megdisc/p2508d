// src/entities/announcement.ts

// 事業所からのお知らせを定義するインターフェース
export interface Announcement {
  id: string; // お知らせを一意に識別するためのID
  officeId: string; // 配信対象の事業所ID
  title: string; // タイトル
  content: string; // 本文
  postDate: string; // 掲載日
}