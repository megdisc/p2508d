// src/components/ui/Input/index.tsx
import { ComponentPropsWithRef, forwardRef } from 'react';
import formStyles from '../Form/style.module.css';

// ★ 修正点: `export` を追加して、他のファイルからインポートできるようにする
export interface InputProps extends ComponentPropsWithRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const inputClasses = [formStyles.input, className].filter(Boolean).join(' ');
    return <input ref={ref} className={inputClasses} {...props} />;
  }
);

Input.displayName = 'Input';