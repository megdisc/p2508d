// src/app/(main)/members/[id]/page.tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useMember } from '@/features/member';
import { MemberDetail } from '@/features/member';
import { PageTitle, Button } from '@/components/ui';
import styles from './style.module.css';

const MemberDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  
  const { member, isLoading, error } = useMember(id);

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;
  if (!member) return <p>利用者が見つかりません。</p>;

  return (
    <div>
      <div className={styles.header}>
        <PageTitle>{member.name} 様</PageTitle>
        <Button onClick={() => router.push('/members')}>一覧へ戻る</Button>
      </div>
      <MemberDetail member={member} />
    </div>
  );
};

export default MemberDetailPage;