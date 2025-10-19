// src/features/staff/components/StaffDetail/index.tsx

"use client";

import { useState } from "react";
import { useStaff } from "@/features/staff/hooks/useStaff";
// 🔽 SubNav, PageTitle は DetailPageLayout が内部で利用するため不要に
import { DetailPageLayout } from "@/components/layout";
import { BasicInfoSection } from "./sections/BasicInfoSection";
import styles from "./style.module.css";
import { Section } from "@/components/ui"; // 🔽 Section をインポート

type Props = {
  staffId: string;
};

// タブの定義
const TABS = [
  { id: "basic-info", label: "基本情報" },
  { id: "schedule", label: "シフト・勤怠" },
  { id: "payroll", label: "給与情報" },
  { id: "training", label: "研修記録" },
];

export const StaffDetail = ({ staffId }: Props) => {
  // 🔽 useStaffフックから返されるデータの型が配列なので、findで該当職員を検索
  const { staff: staffList, isLoading, error } = useStaff();
  const staff = staffList?.find(s => s.id === staffId);

  const [activeTab, setActiveTab] = useState(TABS[0].id);

  if (isLoading) return <div>読み込み中...</div>;
  // 🔽 errorの型を考慮
  if (error) return <div>エラーが発生しました: {error}</div>;
  if (!staff) return <div>職員が見つかりません。</div>;
  
  // 🔽 sectionsオブジェクトを定義
  const sections: { [key: string]: React.ReactNode } = {
    '基本情報': <BasicInfoSection staff={staff} />,
    'シフト・勤怠': <Section title="シフト・勤怠">シフト・勤怠セクション</Section>,
    '給与情報': <Section title="給与情報">給与情報セクション</Section>,
    '研修記録': <Section title="研修記録">研修記録セクション</Section>,
  };

  return (
    // 🔽 DetailPageLayout の props 構造に合わせて修正
    <DetailPageLayout
      pageTitle={`${staff.name}`}
      menuItems={TABS.map(tab => tab.label)}
      sections={sections}
    >
        {/* 🔽 childrenは不要なので削除 */}
    </DetailPageLayout>
  );
};