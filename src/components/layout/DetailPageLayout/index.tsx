'use client';

import { useState, ReactNode } from 'react';
import { PageLayout } from '../PageLayout';
import { SubNav } from '@/components/ui';

interface DetailPageLayoutProps {
  pageTitle: string;
  headerActions?: ReactNode;
  menuItems: string[];
  sections: Record<string, ReactNode>;
}

export const DetailPageLayout = ({ pageTitle, headerActions, menuItems, sections }: DetailPageLayoutProps) => {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <PageLayout pageTitle={pageTitle} headerActions={headerActions}>
      <SubNav
        items={menuItems}
        activeItem={activeItem}
        onSelectItem={setActiveItem}
      />
      <div>{sections[activeItem]}</div>
    </PageLayout>
  );
};
