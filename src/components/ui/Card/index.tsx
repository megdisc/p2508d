// src/components/ui/Card/index.tsx
import { ReactNode } from 'react';
import styles from './style.module.css';

interface CardProps {
  title: string;
  children: ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
};