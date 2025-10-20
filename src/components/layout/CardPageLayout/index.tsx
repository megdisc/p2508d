import { PageHeader } from '@/components/layout';
import styles from './style.module.css';

type CardPageLayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

export const CardPageLayout = ({ pageTitle, children }: CardPageLayoutProps) => {
  return (
    <>
      <PageHeader title={pageTitle} />
      <div className={styles.container}>
        <div className={styles.cardGrid}>{children}</div>
      </div>
    </>
  );
};

