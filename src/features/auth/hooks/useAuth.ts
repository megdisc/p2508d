// src/features/auth/hooks/useAuth.ts

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { login as loginAction, signOut as signOutAction, setAuthError } from '../store/authSlice';
import type { AuthUser } from '@/entities';
import authUsersData from '@/data/authUsers.json';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  // ストアからstatusとerrorも取得
  const { user, isAuthenticated, status, error } = useAppSelector((state) => state.auth);

  /**
   * 開発用のログイン処理。
   */
  const login = () => {
    const defaultUser = authUsersData[0] as AuthUser;
    if (defaultUser) {
      dispatch(loginAction(defaultUser));
      return true;
    }
    // ユーザーが見つからない場合はエラーとして扱う
    const errorMessage = 'Default user for development login not found.';
    console.error(errorMessage);
    dispatch(setAuthError(errorMessage));
    return false;
  };

  const signOut = () => {
    dispatch(signOutAction());
  };

  // statusが'loading'の場合にisLoadingをtrueにする
  const isLoading = status === 'loading';

  return { user, isAuthenticated, login, signOut, isLoading, error };
};