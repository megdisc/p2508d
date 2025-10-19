// src/components/layout/ListPageLayout/index.tsx
import { ReactNode } from 'react';
import { PageHeader } from '../PageHeader';

interface ListPageLayoutProps {
  pageTitle: string;
  children: ReactNode;
  // ★ 変更点: ヘッダーのアクション要素を受け取るプロパティを追加
  headerActions?: ReactNode;
}

export const ListPageLayout = ({
  pageTitle,
  children,
  // ★ 変更点: プロパティを受け取る
  headerActions,
}: ListPageLayoutProps) => {
  return (
    <div>
      {/* ★ 変更点: ハードコードされたボタンを削除し、受け取ったプロパティを渡す */}
      <PageHeader title={pageTitle}>{headerActions}</PageHeader>
      <main>{children}</main>
    </div>
  );
};