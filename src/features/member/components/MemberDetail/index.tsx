// src/features/member/components/MemberDetail/index.tsx
'use client';

import { useState } from 'react';
import { SubNav, Section } from '@/components/ui'; // ★ Section をインポート
import { BasicInfoTab } from './tabs/BasicInfoTab';
import { Member } from '@/entities';
// import styles from './style.module.css'; // ← 不要になるので削除

interface MemberDetailProps {
  member: Member;
}

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

export const MemberDetail = ({ member }: MemberDetailProps) => {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  const renderContent = () => {
    switch (activeItem) {
      case '基本情報':
        return <BasicInfoTab />;
      case 'サービス記録':
        // ★ 他の項目もSectionで囲む
        return <Section title="サービス記録">サービス記録の内容</Section>;
      case '支援計画':
        return <Section title="支援計画">支援計画の内容</Section>;
      case 'コミュニケーション':
        return <Section title="コミュニケーション">コミュニケーションの内容</Section>;
      case '健康・医療':
        return <Section title="健康・医療">健康・医療の内容</Section>;
      case '各種証書':
        return <Section title="各種証書">各種証書の内容</Section>;
      case 'スキル':
        return <Section title="スキル">スキルの内容</Section>;
      case '工賃':
        return <Section title="工賃">工賃の内容</Section>;
      case '関連書類':
        return <Section title="関連書類">関連書類の内容</Section>;
      default:
        return null;
    }
  };

  return (
    <div>
      <SubNav
        items={menuItems}
        activeItem={activeItem}
        onSelectItem={setActiveItem}
      />
      {/* ★ 不要なdivを削除し、直接コンテンツをレンダリング */}
      {renderContent()}
    </div>
  );
};