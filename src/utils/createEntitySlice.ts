import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
} from '@reduxjs/toolkit';
import { apiClient } from '@/lib';
import { RootState } from '@/store';

// createEntitySliceの引数の型
interface CreateSliceOptions<T> {
  name: string;
  selectId: (entity: T) => string;
}

/**
 * 標準的なCRUD操作（一覧取得、個別取得）のためのRedux SliceとAction、Selectorを生成します。
 */
export function createEntitySlice<T>({ name, selectId }: CreateSliceOptions<T>) {
  // Redux ToolkitのEntity Adapterを作成
  const adapter = createEntityAdapter<T>({
    selectId,
  });

  // 全件取得の非同期Thunk
  const fetchAll = createAsyncThunk<T[]>(`${name}/fetchAll`, async () => {
    const response = await apiClient.get<T[]>(`/${name}`);
    return response.data;
  });

  // ID指定での個別取得の非同期Thunk
  const fetch = createAsyncThunk<T, string>(`${name}/fetch`, async (id: string) => {
    const response = await apiClient.get<T>(`/${name}/${id}`);
    return response.data;
  });

  // Sliceの作成
  const slice = createSlice({
    name,
    initialState: adapter.getInitialState({
      status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
      error: null as string | null,
    }),
    reducers: {},
    extraReducers: (builder) => {
      builder
        // fetchAll
        .addCase(fetchAll.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAll.fulfilled, (state, action) => {
          state.status = 'succeeded';
          adapter.setAll(state, action.payload);
        })
        .addCase(fetchAll.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Failed to fetch data.';
        })
        // fetch (by id)
        .addCase(fetch.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetch.fulfilled, (state, action) => {
          state.status = 'succeeded';
          adapter.upsertOne(state, action.payload); // 既存なら更新、なければ追加
        })
        .addCase(fetch.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Failed to fetch data.';
        });
    },
  });

  // Selectorを生成
  const entitySelectors = adapter.getSelectors<RootState>(
    (state) => state[name as keyof RootState] as EntityState<T>
  );

  return {
    reducer: slice.reducer,
    actions: { fetchAll, fetch },
    selectors: entitySelectors,
  };
}
