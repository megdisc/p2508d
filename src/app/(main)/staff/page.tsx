'use client';

import { StaffList } from '@/features/staff';
import { ListPageLayout } from '@/components/layout/ListPageLayout';
import { UI_TEXT } from '@/constants';

const StaffListPage = () => {
  return (
    <ListPageLayout pageTitle={UI_TEXT.PAGE_TITLES.STAFF_LIST}>
      <StaffList />
    </ListPageLayout>
  );
};

export default StaffListPage;