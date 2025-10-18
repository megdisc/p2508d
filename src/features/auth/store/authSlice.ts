// src/features/auth/store/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// 変更点: User -> AuthUser に変更
import type { AuthUser } from '@/entities'; 

interface AuthState {
  user: AuthUser | null; // 型を AuthUser に変更
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ログイン処理
    login: (state, action: PayloadAction<AuthUser>) => { // 型を AuthUser に変更
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // ログアウト処理
    signOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;