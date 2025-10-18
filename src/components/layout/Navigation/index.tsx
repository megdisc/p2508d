// src/components/layout/Navigation/index.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/features/auth';
import { useTerminology } from '@/features/terminology';
import { UI_TEXT } from '@/constants';
import styles from './style.module.css';

export const Navigation = () => {
  const pathname = usePathname();
  const { signOut } = useAuth();
  const { t } = useTerminology();

  const navItems = [
    { href: '/dashboard', label: UI_TEXT.NAVIGATION.DASHBOARD },
    {
      href: '/members',
      label: `${t('term_member', '利用者')}管理`, // 修正点
    },
    {
      href: '/staff',
      label: `${t('term_staff', '職員')}管理`, // 修正点
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={pathname.startsWith(item.href) ? styles.active : styles.link}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.logoutSection}>
        <button onClick={signOut} className={styles.logoutButton}>
          {UI_TEXT.BUTTONS.SIGN_OUT}
        </button>
      </div>
    </nav>
  );
};