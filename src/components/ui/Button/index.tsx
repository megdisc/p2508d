// src/components/ui/Button/index.tsx

import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import styles from './style.module.css';

type ButtonVariant = 'primary' | 'danger';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', ...props }, ref) => {
    
    const buttonClasses = [
      styles.button,
      styles[variant],
      className
    ].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';