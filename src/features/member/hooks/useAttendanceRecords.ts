// src/features/member/hooks/useAttendanceRecords.ts
import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '@/lib/axios';
import type { AttendanceRecord } from '@/entities';

type ProcessedAttendanceRecord = AttendanceRecord & {
  statusValue: string;
};

/**
 * 特定の利用者の月間利用実績を取得するためのカスタムフック
 * @param memberId - 利用者のID
 * @param month - 対象月 (YYYY-MM)
 */
export const useAttendanceRecords = (
  memberId: string | undefined,
  month: string
) => {
  const [records, setRecords] = useState<ProcessedAttendanceRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecords = useCallback(async () => {
    if (!memberId) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiClient.get<ProcessedAttendanceRecord[]>(
        `/members/${memberId}/attendance?month=${month}`
      );
      setRecords(response.data);
    } catch (err: any) {
      setError(err.message || 'データの取得に失敗しました');
    } finally {
      setIsLoading(false);
    }
  }, [memberId, month]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  // データ再取得用の関数を返す
  return { records, isLoading, error, refetch: fetchRecords };
};