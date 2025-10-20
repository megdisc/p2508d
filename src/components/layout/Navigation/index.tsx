// src/components/layout/Navigation/index.tsx

"use client";

import { useAuth } from "@/features/auth/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";

// ナビゲーションの項目を定義
const navItems = [
  { href: "/dashboard", label: "ダッシュボード" },
  { href: "/records", label: "日々の記録" },
  { href: "/members", label: "利用者一覧" },
  { href: "/staff", label: "職員一覧" },
  { href: "/production-activities", label: "生産活動" },
  { href: "/accounting", label: "会計管理" },
  { href: "/kokuhoren-billing", label: "国保連請求" },
  { href: "/data-analysis", label: "データ分析" },
  { href: "/settings", label: "設定" },
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
