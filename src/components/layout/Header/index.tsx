// src/components/layout/Header/index.tsx
import Link from 'next/link'; // 変更
import { UI_TEXT } from '@/constants';
import { Navigation } from '@/components/layout/Navigation';
import styles from './style.module.css';
import { forwardRef } from 'react';

export const Header = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <header className={styles.header} ref={ref}>
      <div>
        <h1 className={styles.logo}>
          <Link href="/dashboard" className={styles.logoLink}> {/* 変更: to -> href */}
            {UI_TEXT.SYSTEM_NAME}
          </Link>
        </h1>
      </div>
      <Navigation />
    </header>
  );
});

Header.displayName = 'Header';