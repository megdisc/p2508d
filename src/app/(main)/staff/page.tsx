// src/app/(main)/staff/page.tsx
'use client';

import { StaffList } from '@/features/staff';
import { ListPageLayout } from '@/components/layout/ListPageLayout';
import { useTerminology } from '@/features/terminology';
import { UI_TEXT } from '@/constants';
// ★ Buttonコンポーネントをインポート
import { Button } from '@/components/ui';

const StaffListPage = () => {
  const { t } = useTerminology();

  const pageTitle = `${t('term_staff', '職員')}一覧`;

  return (
    // ★ 変更点: headerActions プロパティで作成ボタンを渡す
    <ListPageLayout
      pageTitle={pageTitle}
      headerActions={<Button>{UI_TEXT.BUTTONS.CREATE}</Button>}
    >
      <StaffList />
    </ListPageLayout>
  );
};

export default StaffListPage;