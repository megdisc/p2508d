// src/app/(main)/settings/page.tsx
'use client';

import Link from 'next/link';
import { Card, CardContent, CardIcon, CardTitle, CardDescription } from '@/components/ui/Card';
import { CardPageLayout } from '@/components/layout/CardPageLayout';

const SettingsPage = () => {
  const settingItems = [
    {
      icon: 'payments',
      title: '工賃体系設定',
      description: '工賃計算の基本単価、手当、控除項目などを設定します。',
      href: '#',
    },
    {
      icon: 'apartment',
      title: '事業所設定',
      description: '事業所の基本情報、加算サービスなどを設定します。',
      href: '/corporation',
    },
    {
      icon: 'storage',
      title: 'マスタ管理',
      description: '支出費目など、システム内で使用する選択肢を一元管理します。',
      href: '#',
    },
    {
      icon: 'schedule',
      title: '職員勤怠設定',
      description: '勤務時間、休憩、休暇などの勤怠ルールを設定します。',
      href: '#',
    },
    {
      icon: 'manage_accounts',
      title: 'アカウント管理',
      description: '職員アカウントの権限などを設定します。',
      href: '#',
    },
  ];

  return (
    <CardPageLayout pageTitle="設定">
      {settingItems.map((item) => (
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

export default SettingsPage;