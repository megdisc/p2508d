// src/components/ui/PageTitle/index.tsx

import { ReactNode } from 'react';
import styles from './style.module.css';

interface PageTitleProps {
  children: ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};