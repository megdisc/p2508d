// src/app/login/page.tsx
'use client';

import { useEffect } from 'react'; // useEffectをインポート
import { useRouter } from 'next/navigation'; // redirectの代わりにuseRouterを使用
import { LoginForm } from '@/features/auth';
import { useAuth } from '@/features/auth';
import styles from './style.module.css';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // ★ 変更点：useEffectを使用してリダイレクト処理を行う
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  // すでに認証済みの場合は何も表示しない（すぐにリダイレクトされるため）
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;