// src/components/layout/DetailPageLayout/index.tsx
'use client';

import { useState, ReactNode } from 'react';
import { SubNav } from '@/components/ui';
import { PageHeader } from '../PageHeader'; // ★ PageHeaderをインポート

interface DetailPageLayoutProps {
  pageTitle: string;
  menuItems: string[];
  sections: Record<string, ReactNode>;
  headerActions?: ReactNode;
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
      <PageHeader title={pageTitle}>{headerActions}</PageHeader>

      <SubNav
        items={menuItems}
        activeItem={activeItem}
        onSelectItem={setActiveItem}
      />

      <main>{sections[activeItem]}</main>
    </div>
  );
};