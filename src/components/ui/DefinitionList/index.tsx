// src/components/ui/DefinitionList/index.tsx
import { ReactNode } from 'react';
import styles from './style.module.css';

interface DefinitionListProps {
  items: { term: string; description: ReactNode }[];
}

export const DefinitionList = ({ items }: DefinitionListProps) => {
  return (
    <dl className={styles.grid}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <dt className={styles.term}>{item.term}</dt>
          <dd className={styles.description}>{item.description}</dd>
        </div>
      ))}
    </dl>
  );
};