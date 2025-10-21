import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '@/features/auth/store/authSlice';
import { memberReducer } from '@/features/member/store/memberSlice';
import { staffReducer } from '@/features/staff/store/staffSlice';
import { projectReducer } from '@/features/project';
import { terminologyReducer } from '@/features/terminology/store/terminologySlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  member: memberReducer,
  staff: staffReducer,
  project: projectReducer,
  terminology: terminologyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
