// src/hooks/useEntities.ts

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { AsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { GenericState } from '@/utils';

/**
 * 汎用的なデータ取得と状態選択を行うカスタムフック
 * @param featureName - featuresのキー (例: 'member', 'staff')
 * @param fetchThunk - データ取得用のAsyncThunk
 */
export const useEntities = <T>(
  featureName: keyof RootState,
  fetchThunk: AsyncThunk<T[], void, {}>
) => {
  const dispatch = useAppDispatch();

  // ★ 修正点: stateのスライスが存在しない場合も考慮し、安全にアクセスする
  const stateSlice = useAppSelector(
    (state) => state[featureName] as GenericState<T> | undefined
  );

  // ★ 修正点: stateSliceが未定義の場合、初期値を設定する
  const entities = stateSlice?.entities ?? [];
  const status = stateSlice?.status ?? 'idle';
  const error = stateSlice?.error ?? null;

  useEffect(() => {
    // 既に取得済み、または取得中の場合は再取得しない
    if (status === 'idle') {
      dispatch(fetchThunk());
    }
  }, [status, dispatch, fetchThunk]);

  // コンポーネント側で使いやすいように名前を調整して返す
  return { data: entities, isLoading: status === 'loading', error };
};