// src/app/dashboard/page.tsx
'use client';

import { MemberList } from '@/features/member';
import { StaffList } from '@/features/staff';
import { UI_TEXT } from '@/constants';
import { PageTitle, Section } from '@/components/ui';
import styles from './style.module.css';

const DashboardPage = () => {
  return (
    <div>
      <PageTitle>{UI_TEXT.PAGE_TITLES.DASHBOARD}</PageTitle>
    </div>
  );
};

export default DashboardPage;