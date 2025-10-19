// src/features/auth/components/LoginForm/index.tsx
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, Input } from '@/components/ui';
import { useAuth } from '@/features/auth';
import { UI_TEXT } from '@/constants';
import styles from './style.module.css';

type LoginFormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = () => {
    const mockUserEmail = 'admin@example.com';
    login(mockUserEmail);
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.title}>
        <Link href="/login">{UI_TEXT.SYSTEM_NAME}</Link>
      </h1>

      <div className={styles.field}>
        <label htmlFor="email">{UI_TEXT.LABELS.EMAIL}</label>
        <Input
          id="email"
          type="email"
          placeholder={UI_TEXT.PLACEHOLDERS.EMAIL}
          {...register('email')}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="password">{UI_TEXT.LABELS.PASSWORD}</label>
        <Input
          id="password"
          type="password"
          placeholder={UI_TEXT.PLACEHOLDERS.PASSWORD}
          {...register('password')}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      </div>

      {/* ★ 変更点: ラベルを定数に置き換え */}
      <Button type="submit" disabled={isSubmitting}>
        {UI_TEXT.BUTTONS.LOGIN}
      </Button>
    </form>
  );
};