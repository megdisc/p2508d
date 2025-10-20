// src/app/(main)/production-activities/page.tsx
'use client';

import Link from 'next/link';
import { CardPageLayout } from '@/components/layout';
import { Card, CardContent, CardIcon, CardTitle, CardDescription } from '@/components/ui';

const ProductionActivitiesPage = () => {
  const items = [
    {
      icon: 'work',
      title: '案件管理',
      description: '顧客からの請負案件の進捗や収支を管理します。',
      href: '/projects', // 案件一覧ページへのリンク
    },
    {
      icon: 'groups',
      title: '取引先管理',
      description: '案件を発注してくれる顧客や、協力会社を管理します。',
      href: '/partners',
    },
    {
      icon: 'schema',
      title: 'スキルマップ',
      description: '利用者一人ひとりのスキル習得状況を可視化し、適切な作業配置を支援します。',
      href: '/skills',
    },
  ];

  return (
    <CardPageLayout pageTitle="生産活動">
      {items.map((item) => (
        // カード全体をリンクで囲む
        <Link href={item.href} key={item.title} style={{ textDecoration: 'none' }}>
          <Card>
            <CardContent>
              <CardIcon>
                <span className="material-icons">{item.icon}</span>
              </CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </CardPageLayout>
  );
};

export default ProductionActivitiesPage;