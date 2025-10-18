// src/components/ui/Input/index.tsx

import { ComponentPropsWithRef, forwardRef } from 'react';
import formStyles from '../Form/style.module.css'; // 共通スタイルをインポート

interface InputProps extends ComponentPropsWithRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    // 共通スタイルを適用
    const inputClasses = [formStyles.input, className].filter(Boolean).join(' ');
    return <input ref={ref} className={inputClasses} {...props} />;
  }
);

Input.displayName = 'Input';