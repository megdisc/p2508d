// src/features/staff/hooks/useStaff.ts

import { useEntities } from '@/hooks';
import { fetchStaff } from '../store/staffSlice';
import type { Staff } from '@/entities';

type ProcessedStaff = Staff & {
  name: string;
  role: string;
  employmentType: string;
};

export const useStaff = () => {
  // 汎用フックを呼び出す
  const { data: staff, isLoading, error } = useEntities<ProcessedStaff>('staff', fetchStaff);

  return { staff, isLoading, error };
};