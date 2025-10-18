// src/components/ui/SubNav/index.tsx
'use client';

import styles from './style.module.css';

interface SubNavProps {
  items: string[];
  activeItem: string;
  onSelectItem: (item: string) => void;
}

export const SubNav = ({ items, activeItem, onSelectItem }: SubNavProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {items.map((item) => (
          <li key={item}>
            <button
              className={`${styles.navItem} ${activeItem === item ? styles.active : ''}`}
              onClick={() => onSelectItem(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};