// src/components/layout/Navigation/index.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/features/auth';
import { UI_TEXT } from '@/constants';
import styles from './style.module.css';

export const Navigation = () => {
  const pathname = usePathname();
  const { signOut } = useAuth();

  const navItems = [
    { href: '/dashboard', label: UI_TEXT.NAVIGATION.DASHBOARD },
    { href: '/members', label: UI_TEXT.NAVIGATION.MEMBER_MANAGEMENT },
    { href: '/staff', label: UI_TEXT.NAVIGATION.STAFF_MANAGEMENT },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={pathname === item.href ? styles.active : styles.link}
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