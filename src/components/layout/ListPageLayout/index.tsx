import { ReactNode } from 'react';
import { Button, PageTitle } from '@/components/ui';
import { UI_TEXT } from '@/constants';
import styles from './style.module.css';

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
      <div className={styles.header}>
        <PageTitle>{pageTitle}</PageTitle>
        <Button>{UI_TEXT.BUTTONS.ADD}</Button>
      </div>
      {children}
    </div>
  );
};