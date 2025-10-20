// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@/features/auth/store/authSlice';
import { memberReducer } from '@/features/member/store/memberSlice';
import { staffReducer } from '@/features/staff/store/staffSlice';
import { terminologyReducer } from '@/features/terminology/store/terminologySlice'; // 追加

export const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
    staff: staffReducer,
    project: projectReducer,
    terminology: terminologyReducer, // 追加
  },
});

// RootStateとAppDispatchの型をstore自身から推論する
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;