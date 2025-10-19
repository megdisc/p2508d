// src/components/layout/ListPageLayout/index.tsx
import { ReactNode } from 'react';
import { Button } from '@/components/ui';
import { UI_TEXT } from '@/constants';
import { PageHeader } from '../PageHeader'; // ★ PageHeaderをインポート

interface ListPageLayoutProps {
  pageTitle: string;
  children: ReactNode;
}

export const ListPageLayout = ({
  pageTitle,
  children,
}: ListPageLayoutProps) => {
  return (
    <div>
      <PageHeader title={pageTitle}>
        <Button>{`＋ ${UI_TEXT.BUTTONS.CREATE}`}</Button>
      </PageHeader>
      <main>{children}</main>
    </div>
  );
};