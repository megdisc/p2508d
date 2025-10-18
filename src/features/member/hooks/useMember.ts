// src/features/member/hooks/useMember.ts
import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/axios';
import { Member } from '@/entities';

// APIが返す詳細データの型
type ProcessedMemberDetail = Member & {
  name: string;
  status: string;
};

export const useMember = (id: string) => {
  const [member, setMember] = useState<ProcessedMemberDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMember = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get(`/members/${id}`);
        setMember(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch member details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  return { member, isLoading, error };
};