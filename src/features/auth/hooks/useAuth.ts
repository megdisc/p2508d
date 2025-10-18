// src/features/auth/hooks/useAuth.ts

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { login as loginAction, signOut as signOutAction } from '../store/authSlice';
import type { AuthUser } from '@/entities';
// API Clientのインポートを削除し、JSONデータのインポートに戻します
import authUsersData from '@/data/authUsers.json';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  // ログイン処理を元のモック用の処理に戻します
  const login = (email: string) => {
    const foundUser = (authUsersData as AuthUser[]).find(u => u.email === email);
    if (foundUser) {
      dispatch(loginAction(foundUser));
      return true;
    }
    return false;
  };

  const signOut = () => {
    dispatch(signOutAction());
  };

  return { user, isAuthenticated, login, signOut };
};