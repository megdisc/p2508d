// src/components/ui/Textarea/index.tsx
import { ComponentPropsWithRef, forwardRef } from 'react';
import formStyles from '../Form/style.module.css'; // 共通フォームスタイル

interface TextareaProps extends ComponentPropsWithRef<'textarea'> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const textareaClasses = [formStyles.textarea, className].filter(Boolean).join(' ');
    return <textarea ref={ref} className={textareaClasses} {...props} />;
  }
);

Textarea.displayName = 'Textarea';