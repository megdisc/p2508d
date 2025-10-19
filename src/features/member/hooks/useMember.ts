// src/features/member/hooks/useMember.ts

import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/axios';
import type { Member } from '@/entities';

// APIから返される加工済みデータの型
type ProcessedMember = Member & {
  name: string;
  status: string;
};

/**
 * IDを指定して単一の利用者情報を取得するためのカスタムフック
 * @param id - 利用者のID
 */
export const useMember = (id: string | undefined) => {
  const [member, setMember] = useState<ProcessedMember | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // IDが未定義の場合は、データの取得を行わない
    if (!id) {
      setIsLoading(false);
      return;
    }

    const fetchMember = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await apiClient.get<ProcessedMember>(`/members/${id}`);
        setMember(response.data);
      } catch (err: any) {
        setError(err.message || 'データの取得に失敗しました');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMember();
  }, [id]); // idが変更されたら、データを再取得する

  return { member, isLoading, error };
};