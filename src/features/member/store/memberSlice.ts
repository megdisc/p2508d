// src/features/member/store/memberSlice.ts

import { createEntitySlice } from '@/utils';
import type { Member } from '@/entities';

// APIが返す加工済みデータの型
type ProcessedMember = Member & {
  name: string;
  status: string;
};

// 汎用関数を呼び出すだけでSliceが完成
const memberEntitySlice = createEntitySlice<ProcessedMember>({
  name: 'member', // storeのキー名に合わせる
  fetchAllEndpoint: '/members',
});

// `fetchAll`は`fetchMembers`としてエクスポート
export const fetchMembers = memberEntitySlice.fetchAll;
// reducerは`memberReducer`としてエクスポート
export const memberReducer = memberEntitySlice.reducer;