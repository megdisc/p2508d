// src/components/layout/FormGrid/index.tsx
import { ReactNode } from 'react';
import styles from './style.module.css';

interface FormGridProps {
  children: ReactNode;
}

export const FormGrid = ({ children }: FormGridProps) => {
  return <div className={styles.formGrid}>{children}</div>;
};