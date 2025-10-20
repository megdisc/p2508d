// src/components/ui/ResourceList/index.tsx
'use client';

import { Table, Button } from '@/components/ui';
import { UI_TEXT } from '@/constants';
import styles from './style.module.css';

// 列の定義を表す型
export interface ColumnDefinition<T> {
  header: string; // テーブルヘッダーに表示するテキスト
  accessor: (item: T) => React.ReactNode; // データをどのように表示するかを定義する関数
}

// コンポーネントが受け取るプロパティの型
interface ResourceListProps<T extends { id: string }> {
  items: T[]; // 表示するデータの配列
  columns: ColumnDefinition<T>[]; // 列の定義
  onViewDetails: (id: string) => void; // 詳細ボタンのクリックハンドラ
  onDelete?: (id: string) => void; // 削除ボタンのクリックハンドラ（任意）
}

export const ResourceList = <T extends { id: string }>({
  items,
  columns,
  onViewDetails,
  onDelete,
}: ResourceListProps<T>) => {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
          <th>{UI_TEXT.TABLE_HEADERS.OPERATION}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {columns.map((col, index) => (
              <td key={index}>{col.accessor(item)}</td>
            ))}
            <td>
              <div className={styles.buttonGroup}>
                {/* ★ 変更点: "詳細" を定数に置き換え */}
                <Button onClick={() => onViewDetails(item.id)}>
                  {UI_TEXT.BUTTONS.DETAILS}
                </Button>
                {/* onDeleteプロパティが渡された時だけ削除ボタンを表示 */}
                {onDelete && (
                  // ★ 変更点: "削除" を定数に置き換え
                  <Button variant="danger" onClick={() => onDelete(item.id)}>
                    {UI_TEXT.BUTTONS.DELETE}
                  </Button>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};