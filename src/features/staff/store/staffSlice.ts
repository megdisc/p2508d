// src/features/staff/store/staffSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Staff } from '@/entities';
import { apiClient } from '@/lib/axios'; // apiClientをインポート

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

// APIが返す加工済みデータの型
type ProcessedStaff = Staff & {
  name: string;
  role: string;
  employmentType: string;
};

interface StaffState {
  staff: ProcessedStaff[];
  status: Status;
  error: string | null;
}

const initialState: StaffState = {
  staff: [],
  status: 'idle',
  error: null,
};

// APIを呼び出すように修正
export const fetchStaff = createAsyncThunk(
  'staff/fetchStaff', 
  async () => {
    const response = await apiClient.get<ProcessedStaff[]>('/staff');
    return response.data;
  }
);

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaff.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStaff.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.staff = action.payload;
      })
      .addCase(fetchStaff.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch staff';
      });
  },
});

export const staffReducer = staffSlice.reducer;