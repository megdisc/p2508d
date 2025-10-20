// src/features/member/components/MemberDetail/sections/BasicInfoSection.tsx
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Section, Button, FormField, Input } from '@/components/ui';
import { FormActionsLayout, FormGrid } from '@/components/layout';
import { Member } from '@/entities';
// ★ UI_TEXT をインポート
import { UI_TEXT } from '@/constants';

interface BasicInfoSectionProps {
  member: Member & { name: string; status: string };
}

type Inputs = {
  name: string;
  nameKana: string;
  memberNumber: string;
  birthday: string;
  status: string;
};

export const BasicInfoSection = ({ member }: BasicInfoSectionProps) => {
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      name: member.name,
      nameKana: member.contact.nameKana || '',
      memberNumber: member.memberNumber || '',
      birthday: member.birthday ? new Date(member.birthday).toISOString().split('T')[0] : '',
      status: member.status,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    alert('保存処理を実行しました（詳細はコンソールを確認）');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Section title="基本情報">
        <FormGrid>
          <FormField
            id="name"
            label="氏名"
            registration={register('name')}
          />
          <FormField
            id="nameKana"
            label="フリガナ"
            registration={register('nameKana')}
          />
          <FormField
            id="memberNumber"
            label="利用者番号"
            registration={register('memberNumber')}
          />
          <FormField
            id="birthday"
            label="生年月日"
            type="date"
            registration={register('birthday')}
          />
          <FormField
            id="status"
            label="契約状況"
            registration={register('status')}
            disabled
          />
        </FormGrid>
      </Section>

      <FormActionsLayout>
        {/* ★ 変更点: ラベルを定数に置き換え */}
        <Button type="submit">{UI_TEXT.BUTTONS.SAVE}</Button>
      </FormActionsLayout>
    </form>
  );
};