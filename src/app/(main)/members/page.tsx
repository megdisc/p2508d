'use client';

import { MemberList } from '@/features/member';
import { ListPageLayout } from '@/components/layout/ListPageLayout';
import { useTerminology } from '@/features/terminology'; // 追加
import { UI_TEXT } from '@/constants';

const MembersPage = () => {
  const { t } = useTerminology(); // 追加

  // term_memberキーから「メンバー一覧」のようなタイトルを生成
  const pageTitle = `${t('term_member', '利用者')}一覧`;

  return (
    <ListPageLayout pageTitle={pageTitle}>
      <MemberList />
    </ListPageLayout>
  );
};

export default MembersPage;