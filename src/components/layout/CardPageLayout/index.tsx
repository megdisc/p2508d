// src/components/layout/CardPageLayout/index.tsx
import { ReactNode } from 'react';
import { PageHeader } from '../PageHeader';
import styles from './style.module.css';

interface CardPageLayoutProps {
  pageTitle: string;
  description?: string;
  children: ReactNode;
}

export const CardPageLayout = ({ pageTitle, description, children }: CardPageLayoutProps) => {
  return (
    <div>
      <PageHeader title={pageTitle} />
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.grid}>{children}</div>
    </div>
  );
};