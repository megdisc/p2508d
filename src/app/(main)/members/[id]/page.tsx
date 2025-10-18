// src/app/(main)/members/[id]/page.tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useMember } from '@/features/member';
import { Button, Section } from '@/components/ui';
import { DetailPageLayout } from '@/components/layout'; // ★ 新しいレイアウトをインポート
import { BasicInfoSection } from '@/features/member/components/MemberDetail/sections/BasicInfoSection';

const MemberDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { member, isLoading, error } = useMember(id);

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;
  if (!member) return <p>利用者が見つかりません。</p>;

  const menuItems = [
    '基本情報',
    'サービス記録',
    '支援計画',
    'コミュニケーション',
    '健康・医療',
    '各種証書',
    'スキル',
    '工賃',
    '関連書類',
  ];

  const sections = {
    基本情報: <BasicInfoSection />,
    サービス記録: <Section title="サービス記録">サービス記録の内容</Section>,
    支援計画: <Section title="支援計画">支援計画の内容</Section>,
    コミュニケーション: <Section title="コミュニケーション">コミュニケーションの内容</Section>,
    '健康・医療': <Section title="健康・医療">健康・医療の内容</Section>,
    各種証書: <Section title="各種証書">各種証書の内容</Section>,
    スキル: <Section title="スキル">スキルの内容</Section>,
    工賃: <Section title="工賃">工賃の内容</Section>,
    関連書類: <Section title="関連書類">関連書類の内容</Section>,
  };

  return (
    <DetailPageLayout
      pageTitle={`${member.name} 様`}
      menuItems={menuItems}
      sections={sections}
      headerActions={
        <Button onClick={() => router.push('/members')}>一覧へ戻る</Button>
      }
    />
  );
};

export default MemberDetailPage;