// src/features/member/hooks/useMembers.ts
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { fetchMembers } from '../store/memberSlice';

export const useMembers = () => {
  const dispatch = useAppDispatch();
  const { members, status, error } = useAppSelector((state) => state.member);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMembers());
    }
  }, [status, dispatch]);

  return { members, isLoading: status === 'loading', error };
};