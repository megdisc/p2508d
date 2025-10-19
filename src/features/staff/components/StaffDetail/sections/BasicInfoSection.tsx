// src/features/staff/components/StaffDetail/sections/BasicInfoSection.tsx
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Section, Button, FormField } from '@/components/ui';
import { FormActionsLayout, FormGrid } from '@/components/layout';
import { UI_TEXT } from '@/constants';
import { useStaff } from '@/features/staff/hooks';

type Inputs = {
  name: string;
  nameKana: string;
  role: string;
  employmentType: string;
  hireDate: string;
};

type Props = {
  staff: ReturnType<typeof useStaff>['staff'][0];
};

export const BasicInfoSection = ({ staff }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      name: staff?.name || '',
      nameKana: staff?.contact.nameKana || '',
      role: staff?.role || '',
      employmentType: staff?.employmentType || '',
      hireDate: staff?.hireDate ? new Date(staff.hireDate).toISOString().split('T')[0] : '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    alert('保存処理を実行しました（詳細はコンソールを確認）');
  };

  if (!staff) {
    return null;
  }

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
            id="role"
            label="役職"
            registration={register('role')}
          />
          <FormField
            id="employmentType"
            label="雇用形態"
            registration={register('employmentType')}
          />
          <FormField
            id="hireDate"
            label="入社日"
            type="date"
            registration={register('hireDate')}
          />
        </FormGrid>
      </Section>

      <FormActionsLayout>
        <Button type="submit">{UI_TEXT.BUTTONS.SAVE}</Button>
      </FormActionsLayout>
    </form>
  );
};