// src/components/ui/Card/index.tsx
import { ReactNode, HTMLAttributes } from 'react';
import styles from './style.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  const cardClasses = [styles.card, className].filter(Boolean).join(' ');
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export const CardIcon = ({ children }: { children: ReactNode }) => <div className={styles.icon}>{children}</div>;
export const CardContent = ({ children }: { children: ReactNode }) => <div className={styles.content}>{children}</div>;
export const CardTitle = ({ children }: { children: ReactNode }) => <h3 className={styles.title}>{children}</h3>;
export const CardDescription = ({ children }: { children: ReactNode }) => <p className={styles.description}>{children}</p>;