// src/features/auth/store/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AuthUser } from '@/entities';

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; // statusプロパティを追加
  error: string | null; // errorプロパティを追加
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ログイン成功時の処理
    login: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.status = 'succeeded'; // 状態を「成功」に更新
      state.error = null;
    },
    // ログアウト処理
    signOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = 'idle'; // 状態を初期状態に戻す
    },
    // ローディング状態を設定する処理
    setAuthLoading: (state) => {
      state.status = 'loading';
    },
    // エラー状態を設定する処理
    setAuthError: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { login, signOut, setAuthLoading, setAuthError } = authSlice.actions;
export const authReducer = authSlice.reducer;