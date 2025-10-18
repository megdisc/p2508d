// src/components/layout/DetailPageLayout/index.tsx
'use client';

import { useState, ReactNode } from 'react';
import { PageTitle, SubNav } from '@/components/ui';
import styles from './style.module.css';

interface DetailPageLayoutProps {
  pageTitle: string;
  menuItems: string[];
  sections: Record<string, ReactNode>; // メニュー項目と表示コンポーネントをマッピングするオブジェクト
  headerActions?: ReactNode; // ヘッダー右側に表示するボタンなど
}

export const DetailPageLayout = ({
  pageTitle,
  menuItems,
  sections,
  headerActions,
}: DetailPageLayoutProps) => {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <div>
      <div className={styles.header}>
        <PageTitle>{pageTitle}</PageTitle>
        {headerActions && <div className={styles.actions}>{headerActions}</div>}
      </div>

      <SubNav
        items={menuItems}
        activeItem={activeItem}
        onSelectItem={setActiveItem}
      />

      <div>{sections[activeItem]}</div>
    </div>
  );
};