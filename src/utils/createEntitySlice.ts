// src/utils/createEntitySlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiClient } from '@/lib/axios';

// 汎用的な状態の型定義
export interface GenericState<T> {
  entities: T[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// createEntitySlice関数の引数の型定義
interface CreateEntitySliceOptions<T> {
  name: string;
  fetchAllEndpoint: string;
}

/**
 * APIからのデータ取得と状態管理を行う標準的なRedux Sliceを生成します。
 */
export function createEntitySlice<T>({ name, fetchAllEndpoint }: CreateEntitySliceOptions<T>) {
  
  const initialState: GenericState<T> = {
    entities: [],
    status: 'idle',
    error: null,
  };

  const fetchAll = createAsyncThunk<T[]>(
    `${name}/fetchAll`,
    async () => {
      const response = await apiClient.get<T[]>(fetchAllEndpoint);
      return response.data;
    }
  );

  const entitySlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAll.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAll.fulfilled, (state, action: PayloadAction<T[]>) => {
          state.status = 'succeeded';
          // ★ 修正点: 型エラーを解消するために `as any` を追加
          state.entities = action.payload as any;
        })
        .addCase(fetchAll.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message ?? `Failed to fetch ${name}`;
        });
    },
  });

  return {
    reducer: entitySlice.reducer,
    fetchAll,
  };
}