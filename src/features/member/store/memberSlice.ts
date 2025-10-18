// src/features/member/store/memberSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Member } from '@/entities';
// 変更点①: axiosクライアントをインポートします
import { apiClient } from '@/lib/axios'; 
// 変更点②: JSONファイルの直接インポートを削除します
// import membersData from '@/data/members.json';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

// 変更点③: APIが返す加工済みデータの型を定義します
// Memberエンティティに、APIで結合されたnameとstatusプロパティを追加した型です
type ProcessedMember = Member & {
  name: string;
  status: string;
};

interface MemberState {
  members: ProcessedMember[]; // 型をProcessedMemberに変更
  status: Status;
  error: string | null;
}

const initialState: MemberState = {
  members: [],
  status: 'idle',
  error: null,
};

// 変更点④: createAsyncThunkの実装をAPI呼び出しに変更します
export const fetchMembers = createAsyncThunk(
  'members/fetchMembers', 
  async () => {
    // '/api/members'エンドポイントに対してGETリクエストを送信します
    const response = await apiClient.get<ProcessedMember[]>('/members');
    return response.data;
  }
);

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch members';
      });
  },
});

export const memberReducer = memberSlice.reducer;