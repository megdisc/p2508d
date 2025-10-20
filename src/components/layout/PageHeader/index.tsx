// src/components/layout/PageHeader/index.tsx
import { ReactNode } from 'react';
// import { PageTitle } from '@/components/ui'; // この行を削除
import styles from './style.module.css';

interface PageHeaderProps {
  title: string;
  children?: ReactNode; // アクションボタンなどを受け取る
}

export const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      {/* <PageTitle> を <h1> に変更 */}
      <h1 className={styles.title}>{title}</h1>
      {children && <div className={styles.actions}>{children}</div>}
    </header>
  );
};