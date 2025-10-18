'use client';

import { MemberList } from '@/features/member';
import { ListPageLayout } from '@/components/layout/ListPageLayout';
import { UI_TEXT } from '@/constants';

const MembersPage = () => {
  return (
    <ListPageLayout pageTitle={UI_TEXT.PAGE_TITLES.MEMBER_LIST}>
      <MemberList />
    </ListPageLayout>
  );
};

export default MembersPage;