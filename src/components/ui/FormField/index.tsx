// src/components/ui/FormField/index.tsx
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, InputProps } from '../Input';
import styles from './style.module.css';

interface FormFieldProps extends InputProps {
  label: string;
  registration: Partial<UseFormRegisterReturn>;
  id: string; 
}

// ★ forwardRefを削除し、シンプルなコンポーネントに変更
export const FormField = ({ label, registration, id, ...props }: FormFieldProps) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {/* refの競合がなくなったため、registration内のrefが正しくInputに渡される */}
      <Input id={id} {...registration} {...props} />
    </>
  );
};

FormField.displayName = 'FormField';