// src/components/ui/FormField/index.tsx
import { ComponentType, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input } from '../Input';
import styles from './style.module.css';

interface FormFieldProps
  extends InputHTMLAttributes<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > {
  id: string;
  label: string;
  registration: Partial<UseFormRegisterReturn>;
  as?: ComponentType<any>;
  children?: React.ReactNode;
}

export const FormField = ({
  id,
  label,
  registration,
  as: Component = Input,
  children,
  ...props
}: FormFieldProps) => {
  return (
    // シンプルなFragmentを返し、labelとComponentをFormGridの直接の子要素にする
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <Component id={id} {...registration} {...props}>
        {children}
      </Component>
    </>
  );
};

FormField.displayName = 'FormField';