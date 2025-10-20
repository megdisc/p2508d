// src/features/staff/components/StaffDetail/sections/BasicInfoSection.tsx
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
// ★ Input コンポーネントをインポート
import { Section, Button, FormField, Input } from '@/components/ui';
import { FormActionsLayout, FormGrid } from '@/components/layout';
import { UI_TEXT } from '@/constants';
import { useStaff } from '@/features/staff/hooks';
import type { Staff, Contact } from '@/entities'; // ★ Contact 型をインポート

// ★ ProcessedStaff 型の定義を hooks から移動 (必要に応じて型定義を調整)
type ProcessedStaff = Staff & {
  name: string;
  nameKana: string; // useStaff フック側で結合されている想定
  role: string;
  employmentType: string;
  // contact オブジェクト全体を含むように修正
  contact: Contact;
};


// フォームの入力値の型
type Inputs = {
  // ★ nameKana を削除し、lastNameKana と firstNameKana を追加
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  role: string;
  employmentType: string;
  hireDate: string;
};

type Props = {
  // ★ Props で受け取る staff の型を ProcessedStaff に変更
  staff: ProcessedStaff | undefined; // useStaff の返り値に合わせる
};

export const BasicInfoSection = ({ staff }: Props) => {
  // staff が undefined の場合の初期値を考慮
  const defaultValues = {
    lastName: staff?.contact?.lastName || '',
    firstName: staff?.contact?.firstName || '',
    lastNameKana: staff?.contact?.lastNameKana || '',
    firstNameKana: staff?.contact?.firstNameKana || '',
    role: staff?.role || '',
    employmentType: staff?.employmentType || '',
    hireDate: staff?.hireDate ? new Date(staff.hireDate).toISOString().split('T')[0] : '',
  };

  const { register, handleSubmit } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // ★ 結合して nameKana を作成する例（必要に応じて調整）
    const submittedData = {
      ...data,
      nameKana: `${data.lastNameKana} ${data.firstNameKana}`.trim(),
    };
    console.log(submittedData);
    alert('保存処理を実行しました（詳細はコンソールを確認）');
  };

  // staff が存在しない場合は何も表示しない
  if (!staff) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Section title="基本情報">
        <FormGrid>
          {/* --- 氏名 --- */}
          {/* ★ Label を修正し、lastName と firstName に分割 */}
          <FormField label="氏名（姓）">
            <Input id="lastName" {...register('lastName')} />
          </FormField>
          <FormField label="氏名（名）">
            <Input id="firstName" {...register('firstName')} />
          </FormField>
          {/* --- フリガナ --- */}
          {/* ★ Label を修正し、lastNameKana と firstNameKana に分割 */}
          <FormField label="フリガナ（姓）">
            <Input id="lastNameKana" {...register('lastNameKana')} />
          </FormField>
          <FormField label="フリガナ（名）">
            <Input id="firstNameKana" {...register('firstNameKana')} />
          </FormField>
          {/* --- 役職 --- */}
          <FormField label="役職">
            {/* ★ value を直接指定せず、register を使用 */}
            <Input id="role" {...register('role')} />
          </FormField>
          {/* --- 雇用形態 --- */}
          <FormField label="雇用形態">
            <Input id="employmentType" {...register('employmentType')} />
          </FormField>
          {/* --- 入社日 --- */}
          <FormField label="入社日">
            <Input id="hireDate" type="date" {...register('hireDate')} />
          </FormField>
        </FormGrid>
      </Section>

      <FormActionsLayout>
        <Button type="submit">{UI_TEXT.BUTTONS.SAVE}</Button>
      </FormActionsLayout>
    </form>
  );
};