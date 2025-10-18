// src/store/hooks.ts

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './index';

// アプリケーション全体で、型付けされた `useDispatch` を使用する
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// アプリケーション全体で、型付けされた `useSelector` を使用する
export const useAppSelector = useSelector.withTypes<RootState>();