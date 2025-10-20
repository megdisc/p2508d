// src/components/layout/Navigation/index.tsx

"use client";

import { useAuth } from "@/features/auth/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";

// ナビゲーションの項目を定義
const navItems = [
  { href: "/dashboard", label: "ダッシュボード" },
  { href: "/members", label: "メンバー管理" },
  { href: "/staff", label: "スタッフ管理" },
  // 他のナビゲーション項目...
  { href: "/settings", label: "設定" }, // ← この行を追加
];

export const Navigation = () => {
  const pathname = usePathname();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

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
        <button onClick={handleLogout} className={styles.logoutButton}>
          ログアウト
        </button>
      </div>
    </nav>
  );
};