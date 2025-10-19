'use client';

import { MemberList } from '@/features/member';
import { ListPageLayout } from '@/components/layout/ListPageLayout';
import { useTerminology } from '@/features/terminology';
import { UI_TEXT } from '@/constants';
// ★ Buttonコンポーネントをインポート
import { Button } from '@/components/ui';

const MembersPage = () => {
  const { t } = useTerminology();

  const pageTitle = `${t('term_member', '利用者')}一覧`;

  return (
    // ★ 変更点: headerActions プロパティで作成ボタンを渡す
    <ListPageLayout
      pageTitle={pageTitle}
      headerActions={<Button>{UI_TEXT.BUTTONS.CREATE}</Button>}
    >
      <MemberList />
    </ListPageLayout>
  );
};

export default MembersPage;