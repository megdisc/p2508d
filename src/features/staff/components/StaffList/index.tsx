// src/features/staff/components/StaffList/index.tsx
'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useStaff } from '@/features/staff/hooks';
import { ResourceList, ColumnDefinition } from '@/components/ui/ResourceList';
import { UI_TEXT } from '@/constants';

type ProcessedStaff = {
  id: string;
  name: string;
  role: string;
  employmentType: string;
};

export const StaffList = () => {
  const router = useRouter();
  const { staff, isLoading, error } = useStaff();

  const columns: ColumnDefinition<ProcessedStaff>[] = [
    { header: UI_TEXT.LABELS.STAFF_NAME, accessor: (s) => s.name },
    { header: UI_TEXT.LABELS.JOB_TITLE, accessor: (s) => s.role },
    { header: '雇用形態', accessor: (s) => s.employmentType },
  ];

  const handleViewDetails = useCallback((id: string) => {
    router.push(`/staff/${id}`);
  }, [router]);

  const handleDelete = useCallback((id: string) => {
    // ここに削除処理を実装します
    // 例: console.log('Deleting staff with id:', id);
    alert(`職員ID: ${id} を削除します（実装は後ほど）`);
  }, []);

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <ResourceList
      items={staff}
      columns={columns}
      onViewDetails={handleViewDetails}
      onDelete={handleDelete}
    />
  );
};