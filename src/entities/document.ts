// src/entities/document.ts

// 関連付けられるエンティティの種別
export type DocumentParentEntity = 'member' | 'staff' | 'project' | 'client' | 'office';

// 文書・書類を管理するインターフェース
export interface Document {
  id: string; // ドキュメントを一意に識別するためのID
  fileName: string; // ファイル名
  fileType: string; // ファイル種別（例: '個別支援計画', '契約書'）
  fileUrl: string; // Supabase Storage上のファイルへのURL
  uploadedById: string; // アップロードした職員のID (Staffを参照)
  uploadedAt: string; // アップロード日時
  
  // どのエンティティに関連付けられているかを示す
  parentEntity: DocumentParentEntity;
  parentId: string;
}