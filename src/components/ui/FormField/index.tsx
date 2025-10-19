// src/components/ui/FormField/index.tsx
import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, InputProps } from '../Input'; // ★ InputPropsをインポート
import styles from './style.module.css';

// ★ 修正点: InputPropsを継承し、idを必須プロパティとして定義
interface FormFieldProps extends InputProps {
  label: string;
  registration: Partial<UseFormRegisterReturn>;
  id: string; // idはラベルと入力の連携に必須
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, registration, id, ...props }, ref) => {
    return (
      <>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <Input id={id} {...registration} {...props} ref={ref} />
      </>
    );
  }
);

FormField.displayName = 'FormField';