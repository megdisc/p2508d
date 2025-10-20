import { ReactNode } from 'react';
import { PageLayout } from '../PageLayout';

interface ListPageLayoutProps {
  pageTitle: string;
  headerActions?: ReactNode;
  children: ReactNode;
}

export const ListPageLayout = (props: ListPageLayoutProps) => {
  return <PageLayout {...props}>{props.children}</PageLayout>;
};
