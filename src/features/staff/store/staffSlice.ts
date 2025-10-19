// src/features/staff/store/staffSlice.ts

import { createEntitySlice } from '@/utils';
import type { Staff } from '@/entities';

// APIが返す加工済みデータの型
type ProcessedStaff = Staff & {
  name: string;
  role: string;
  employmentType: string;
};

// 同様に汎用関数を呼び出す
const staffEntitySlice = createEntitySlice<ProcessedStaff>({
  name: 'staff', // storeのキー名に合わせる
  fetchAllEndpoint: '/staff',
});

// `fetchAll`は`fetchStaff`としてエクスポート
export const fetchStaff = staffEntitySlice.fetchAll;
// reducerは`staffReducer`としてエクスポート
export const staffReducer = staffEntitySlice.reducer;