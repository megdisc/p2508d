// src/features/terminology/store/terminologySlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '@/lib/axios';

// APIが返すデータの型 (例: { term_member: 'メンバー', term_staff: 'スタッフ' })
export type TerminologyMap = Record<string, string>;

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

interface TerminologyState {
  terminologies: TerminologyMap;
  status: Status;
  error: string | null;
}

const initialState: TerminologyState = {
  terminologies: {},
  status: 'idle',
  error: null,
};

// 用語データを取得するための非同期Action
export const fetchTerminologies = createAsyncThunk(
  'terminology/fetchTerminologies',
  async () => {
    const response = await apiClient.get<TerminologyMap>('/terminologies');
    return response.data;
  }
);

const terminologySlice = createSlice({
  name: 'terminology',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTerminologies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTerminologies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.terminologies = action.payload;
      })
      .addCase(fetchTerminologies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch terminologies';
      });
  },
});

export const terminologyReducer = terminologySlice.reducer;