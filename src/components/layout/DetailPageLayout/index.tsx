import { ReactNode } from 'react';
import { PageHeader } from '../PageHeader';

interface DetailPageLayoutProps {
  title: string;
  headerActions?: ReactNode;
  subnav?: ReactNode;
  children: ReactNode;
}

export const DetailPageLayout = ({
  title,
  headerActions,
  subnav,
  children,
}: DetailPageLayoutProps) => {
  return (
    <>
      <PageHeader title={title}>{headerActions}</PageHeader>
      {subnav}
      <div>{children}</div>
    </>
  );
};
