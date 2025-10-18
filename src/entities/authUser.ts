// src/entities/authUser.ts

// 認証ユーザーの種別を定義する型エイリアス
export type UserType = 'staff' | 'member';

// SupabaseのAuthユーザーに対応するインターフェース定義
export interface AuthUser {
  id: string; // SupabaseのAuthユーザーID (UUID)
  email: string; // ログインに使用するメールアドレス
  userType: UserType; // ユーザーの種別（職員か利用者か）
}