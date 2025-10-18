// src/providers/index.tsx （ファイル名を変更）

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};