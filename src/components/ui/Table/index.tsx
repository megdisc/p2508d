// src/components/ui/Table/index.tsx
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import styles from './style.module.css';

// ★ layoutプロパティを削除
interface TableProps extends ComponentPropsWithRef<'table'> {
  children: ReactNode;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, ...props }, ref) => {
    // ★ wrapperのクラスをシンプルに
    const wrapperClasses = styles.wrapper;
    const tableClasses = [styles.table, className].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses}>
        <table ref={ref} className={tableClasses} {...props}>
          {children}
        </table>
      </div>
    );
  }
);

Table.displayName = 'Table';