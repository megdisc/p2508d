// src/features/staff/hooks/useStaff.ts
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { fetchStaff } from '../store/staffSlice';

export const useStaff = () => {
  const dispatch = useAppDispatch();
  const { staff, status, error } = useAppSelector((state) => state.staff);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStaff());
    }
  }, [status, dispatch]);

  return { staff, isLoading: status === 'loading', error };
};