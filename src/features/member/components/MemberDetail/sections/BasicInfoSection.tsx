// src/features/member/components/MemberDetail/sections/BasicInfoSection.tsx
import { DefinitionList, Section } from '@/components/ui';

// モックデータ（実際にはpropsでデータを受け取ります）
const mockMember = {
  name: '青木 誠',
  nameKana: 'アオキ マコト',
  memberNumber: 'A001',
  birthday: '2000-04-01',
  status: '利用中'
};

// ★ 修正点: コンポーネント名を変更
export const BasicInfoSection = () => { 
  const items = [
    { term: '氏名', description: mockMember.name },
    { term: 'フリガナ', description: mockMember.nameKana },
    { term: '利用者番号', description: mockMember.memberNumber },
    { term: '生年月日', description: mockMember.birthday },
    { term: '契約状況', description: mockMember.status },
  ];

  return (
    <Section title="基本情報">
      <DefinitionList items={items} />
    </Section>
  );
};