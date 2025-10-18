// src/app/(main)/staff/page.tsx
'use client';

import { StaffList } from '@/features/staff';
import { ListPageLayout } from '@/components/layout/ListPageLayout';
import { useTerminology } from '@/features/terminology'; // 追加
import { UI_TEXT } from '@/constants';

const StaffListPage = () => {
  const { t } = useTerminology(); // 追加

  // term_staffキーから「スタッフ一覧」のようなタイトルを生成
  const pageTitle = `${t('term_staff', '職員')}一覧`;

  return (
    <ListPageLayout pageTitle={pageTitle}>
      <StaffList />
    </ListPageLayout>
  );
};

export default StaffListPage;