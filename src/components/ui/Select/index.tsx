// src/components/ui/Select/index.tsx

import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import formStyles from '../Form/style.module.css'; // 共通フォームスタイル

interface SelectProps extends ComponentPropsWithRef<'select'> {
  children: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, ...props }, ref) => {
    const combinedClasses = [formStyles.input, className].filter(Boolean).join(' ');
    return (
      <select ref={ref} className={combinedClasses} {...props}>
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';