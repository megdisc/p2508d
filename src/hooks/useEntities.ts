import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks'; // 修正: 正しいフックをインポート
import { RootState } from '@/store'; // 追加: RootStateの型をインポート
import { AsyncThunk } from '@reduxjs/toolkit';

// useEntitiesフックの引数の型定義
interface UseEntitiesParams<T> {
  fetch: AsyncThunk<T, string, any>;
  fetchAll: AsyncThunk<T[], void, any>;
  selectors: {
    selectAll: (state: RootState) => T[]; // 修正: stateの型を定義
    selectById: (state: RootState, id: string) => T | undefined; // 修正: stateの型を定義
  };
  endpoint: string;
  id?: string;
}

/**
 * Reduxストアと連携し、単一または複数のエンティティを取得・管理する汎用フック
 */
export const useEntities = <T extends { id: string }>({
  fetch,
  fetchAll,
  selectors,
  id,
}: UseEntitiesParams<T>) => {
  const dispatch = useAppDispatch();
  const entities = useAppSelector(selectors.selectAll);
  const entity = id ? useAppSelector((state: RootState) => selectors.selectById(state, id)) : undefined;

  const loadAll = useCallback(() => {
    if (entities.length === 0) {
      dispatch(fetchAll());
    }
  }, [dispatch, fetchAll, entities.length]);

  const loadById = useCallback(
    (fetchId: string) => {
      if (!entities.find((e) => e.id === fetchId)) {
        dispatch(fetch(fetchId));
      }
    },
    [dispatch, fetch, entities]
  );

  useEffect(() => {
    if (id) {
      loadById(id);
    } else {
      loadAll();
    }
  }, [id, loadById, loadAll]);

  const sliceName = fetch.typePrefix.split('/')[0] as keyof RootState;

  return {
    entities,
    entity,
    loading: useAppSelector((state: RootState) => state[sliceName].status === 'loading'), // 修正: stateの型を定義
    error: useAppSelector((state: RootState) => state[sliceName].error), // 修正: stateの型を定義
    refetch: id ? () => loadById(id) : loadAll,
  };
};
