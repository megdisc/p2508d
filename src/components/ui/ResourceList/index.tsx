'use client';

import { ReactNode } from 'react';
import { Table, Button } from '@/components/ui';
import { UI_TEXT } from '@/constants';
import styles from './style.module.css';

// Tの型をより緩やかに
type GenericItem = Record<string, any> & { id: string };

// カラム定義の型
interface Column<T extends GenericItem> {
  field: keyof T;
  headerName: string;
  width?: string;
  renderCell?: (params: { row: T }) => ReactNode;
}

interface ResourceListProps<T extends GenericItem> {
  rows: T[];
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
  onDeleteClick?: (row: T) => void;
}

export const ResourceList = <T extends GenericItem>({
  rows,
  columns,
  onRowClick,
  onDeleteClick,
}: ResourceListProps<T>) => {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.field)} style={{ width: col.width }}>
              {col.headerName}
            </th>
          ))}
          {(onRowClick || onDeleteClick) && <th>{UI_TEXT.TABLE_HEADERS.OPERATION}</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} onClick={() => onRowClick?.(row)} style={{ cursor: onRowClick ? 'pointer' : 'default' }}>
            {columns.map((col) => (
              <td key={`${row.id}-${String(col.field)}`}>
                {col.renderCell ? col.renderCell({ row }) : row[col.field]}
              </td>
            ))}
            {(onRowClick || onDeleteClick) && (
              <td>
                <div className={styles.buttonGroup}>
                  {onRowClick && (
                     <Button onClick={() => onRowClick(row)}>{UI_TEXT.BUTTONS.DETAILS}</Button>
                  )}
                  {onDeleteClick && (
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        e.stopPropagation(); // 行クリックイベントの発火を防ぐ
                        onDeleteClick(row);
                      }}
                    >
                      {UI_TEXT.BUTTONS.DELETE}
                    </Button>
                  )}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
