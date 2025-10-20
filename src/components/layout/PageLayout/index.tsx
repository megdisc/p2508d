import { ReactNode } from 'react';
import { PageHeader } from '../PageHeader';
import styles from './style.module.css';

interface PageLayoutProps {
  pageTitle: string;
  headerActions?: ReactNode;
  children: ReactNode;
}

export const PageLayout = ({ pageTitle, headerActions, children }: PageLayoutProps) => {
  return (
    <div className={styles.container}>
      <PageHeader title={pageTitle}>{headerActions}</PageHeader>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
