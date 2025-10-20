import { ReactNode } from 'react';
import { PageLayout } from '../PageLayout';
import styles from './style.module.css';

interface CardPageLayoutProps {
  pageTitle: string;
  headerActions?: ReactNode;
  description?: string;
  children: ReactNode;
}

export const CardPageLayout = ({ pageTitle, headerActions, description, children }: CardPageLayoutProps) => {
  return (
    <PageLayout pageTitle={pageTitle} headerActions={headerActions}>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.grid}>{children}</div>
    </PageLayout>
  );
};
