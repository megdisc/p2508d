// src/features/member/components/MemberDetail/tabs/BasicInfoTab.tsx
import { DefinitionList, Section } from '@/components/ui'; // ★ Section をインポート

// モックデータ（実際にはpropsでデータを受け取ります）
const mockMember = {
  name: '青木 誠',
  nameKana: 'アオキ マコト',
  memberNumber: 'A001',
  birthday: '2000-04-01',
  status: '利用中'
};

export const BasicInfoTab = () => {
  const items = [
    { term: '氏名', description: mockMember.name },
    { term: 'フリガナ', description: mockMember.nameKana },
    { term: '利用者番号', description: mockMember.memberNumber },
    { term: '生年月日', description: mockMember.birthday },
    { term: '契約状況', description: mockMember.status },
  ];

  return (
    // ★ Sectionコンポーネントでラップし、見出しを設定
    <Section title="基本情報">
      <DefinitionList items={items} />
    </Section>
  );
};