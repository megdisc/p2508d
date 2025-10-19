// src/components/layout/PageHeader/index.tsx
import { ReactNode } from 'react';
import { PageTitle } from '@/components/ui';
import styles from './style.module.css';

interface PageHeaderProps {
  title: string;
  children?: ReactNode; // アクションボタンなどを受け取る
}

export const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <PageTitle>{title}</PageTitle>
      {children && <div className={styles.actions}>{children}</div>}
    </header>
  );
};