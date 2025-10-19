// src/features/member/components/MemberDetail/modals/AttendanceRecordModal/index.tsx
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, FormField, Select, Textarea, Button } from '@/components/ui';
import { FormGrid, FormActionsLayout } from '@/components/layout';
import type { AttendanceRecord } from '@/entities';

// モーダルが受け取るプロパティ
interface AttendanceRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberId: string;
  targetDate: string | null;
  record?: AttendanceRecord; // 既存の記録データ（新規作成時はundefined）
}

// フォームの入力値の型
type Inputs = {
  statusId: string;
  actualStartTime: string;
  actualEndTime: string;
  hasLunch: boolean;
  healthStatus: string;
  notes: string;
};

export const AttendanceRecordModal = ({
  isOpen,
  onClose,
  memberId,
  targetDate,
  record,
}: AttendanceRecordModalProps) => {
  const { register, handleSubmit } = useForm<Inputs>({
    // recordが存在すればその値を、なければ初期値をセット
    defaultValues: {
      statusId: record?.statusId || 'master-attendance-present',
      actualStartTime: record?.actualStartTime || '',
      actualEndTime: record?.actualEndTime || '',
      hasLunch: record?.hasLunch || false,
      healthStatus: record?.healthStatus || '',
      notes: record?.notes || '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({
      memberId,
      date: targetDate,
      ...data,
    });
    alert('保存処理を実行しました（詳細はコンソールを確認）');
    onClose(); // 保存後モーダルを閉じる
  };

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${targetDate} の利用記録`}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid>
          <FormField
            id="statusId"
            label="利用状況"
            registration={register('statusId')}
            as={Select}
          >
            <option value="master-attendance-present">利用</option>
            <option value="master-attendance-absent">欠席</option>
            <option value="master-attendance-hospital">通院</option>
          </FormField>

          <FormField
            id="actualStartTime"
            label="開始時刻"
            type="time"
            registration={register('actualStartTime')}
          />

          <FormField
            id="actualEndTime"
            label="終了時刻"
            type="time"
            registration={register('actualEndTime')}
          />
          
          <FormField
            id="healthStatus"
            label="体調"
            registration={register('healthStatus')}
          />

          <FormField
            id="notes"
            label="特記事項"
            registration={register('notes')}
            as={Textarea}
          />
        </FormGrid>

        <FormActionsLayout>
          <Button type="button" variant="danger" onClick={onClose}>
            キャンセル
          </Button>
          <Button type="submit">保存</Button>
        </FormActionsLayout>
      </form>
    </Modal>
  );
};