// src/components/ui/Checkbox/index.tsx

import { ComponentPropsWithRef, forwardRef } from 'react';
import formStyles from '../Form/style.module.css'; // 共通フォームスタイル
import styles from './style.module.css';

interface CheckboxProps extends ComponentPropsWithRef<'input'> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    const combinedClasses = [formStyles.checkbox, styles.customCheckbox, className].filter(Boolean).join(' ');
    return <input ref={ref} type="checkbox" className={combinedClasses} {...props} />;
  }
);

Checkbox.displayName = 'Checkbox';