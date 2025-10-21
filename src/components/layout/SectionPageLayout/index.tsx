import { ReactNode } from 'react';
import { PageLayout } from '../PageLayout';
import styles from './style.module.css';

interface SectionPageLayoutProps {
  pageTitle: string;
  headerActions?: ReactNode;
  children: ReactNode;
}

export const SectionPageLayout = (props: SectionPageLayoutProps) => {
  return (
    <PageLayout {...props}>
      <div className={styles.sections}>{props.children}</div>
    </PageLayout>
  );
};
