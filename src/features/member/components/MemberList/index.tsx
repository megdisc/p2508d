// src/features/member/components/MemberList/index.tsx
'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useMembers } from '@/features/member/hooks';
import { ResourceList, ColumnDefinition } from '@/components/ui/ResourceList';
import { UI_TEXT } from '@/constants';

// APIから返ってくる加工済みメンバーの型
type ProcessedMember = {
  id: string;
  name: string;
  status: string;
};

export const MemberList = () => {
  const router = useRouter();
  const { members, isLoading, error } = useMembers();

  // 列の定義
  const columns: ColumnDefinition<ProcessedMember>[] = [
    { header: UI_TEXT.TABLE_HEADERS.FULL_NAME, accessor: (member) => member.name }, // ★ 変更
    { header: UI_TEXT.TABLE_HEADERS.CONTRACT_STATUS, accessor: (member) => member.status },
  ];

  // 詳細ボタンがクリックされたときの処理
  const handleViewDetails = useCallback((id: string) => {
    router.push(`/members/${id}`);
  }, [router]);

  // 削除ボタンがクリックされたときの処理
  const handleDelete = useCallback((id: string) => {
    // ここに削除処理を実装します
    // 例: console.log('Deleting member with id:', id);
    alert(`利用者ID: ${id} を削除します（実装は後ほど）`);
  }, []);


  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <ResourceList
      items={members}
      columns={columns}
      onViewDetails={handleViewDetails}
      onDelete={handleDelete}
    />
  );
};