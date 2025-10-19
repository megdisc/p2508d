// src/features/member/hooks/useMembers.ts

import { useEntities } from '@/hooks';
import { fetchMembers } from '../store/memberSlice';
import type { Member } from '@/entities';

type ProcessedMember = Member & {
  name: string;
  status: string;
};

export const useMembers = () => {
  const { data: members, isLoading, error } = useEntities<ProcessedMember>('member', fetchMembers);
  return { members, isLoading, error };
};