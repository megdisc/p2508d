// src/components/layout/FormActionsLayout/index.tsx
import { ReactNode } from 'react';
import styles from './style.module.css';

interface FormActionsLayoutProps {
  children: ReactNode;
}

export const FormActionsLayout = ({ children }: FormActionsLayoutProps) => {
  return <div className={styles.actionsContainer}>{children}</div>;
};