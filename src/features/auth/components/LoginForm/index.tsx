'use client';

import React from 'react'; // Reactをインポート
import { Button, FormField, Input, Section } from '@/components/ui';
import { useAuth } from '@/features/auth/hooks/useAuth';
import styles from './style.module.css';
import { UI_TEXT } from '@/constants';

export const LoginForm = () => {
  const { login, isLoading, error } = useAuth();

  // フォーム送信時の処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // デフォルトのフォーム送信をキャンセル
    login(); // 引数なしでlogin関数を呼び出す
  };

  return (
    <Section title={UI_TEXT.SYSTEM_NAME} className={styles.loginSection}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <FormField label={UI_TEXT.LABELS.EMAIL}>
            <Input id="email" type="email" placeholder="（入力不要）" />
          </FormField>
          <FormField label={UI_TEXT.LABELS.PASSWORD}>
            <Input id="password" type="password" placeholder="（入力不要）" />
          </FormField>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <Button type="submit" disabled={isLoading} variant="primary">
            {isLoading ? 'ログイン中...' : UI_TEXT.BUTTONS.LOGIN}
          </Button>
        </form>
    </Section>
  );
};