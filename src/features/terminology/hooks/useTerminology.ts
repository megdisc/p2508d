// src/features/terminology/hooks/useTerminology.ts
import { useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { fetchTerminologies, TerminologyMap } from '../store/terminologySlice';

export const useTerminology = () => {
  const dispatch = useAppDispatch();
  const { terminologies, status } = useAppSelector(
    (state) => state.terminology
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTerminologies());
    }
  }, [status, dispatch]);

  /**
   * 用語キーに対応する表示名を取得します。
   * useCallbackを使用して、不要な再生成を防ぎます。
   * @param key - 用語キー (例: 'term_member')
   * @param fallback - 見つからなかった場合の代替テキスト
   */
  const t = useCallback(
    (key: keyof TerminologyMap, fallback: string): string => {
      // terminologiesオブジェクトが存在し、かつキーが存在する場合のみカスタム値を返す
      if (status === 'succeeded' && terminologies && key in terminologies) {
        return terminologies[key];
      }
      return fallback;
    },
    [terminologies, status]
  );

  return { t, isLoading: status === 'loading' };
};