'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, FormField, Input } from '@/components/ui';
import { useAuth } from '@/features/auth/hooks/useAuth';
import styles from './style.module.css';
import { UI_TEXT } from '@/constants';

const loginSchema = z.object({
  email: z.string().email('有効なメールアドレスを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { login, isLoading, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    login(data.email, data.password);
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>{UI_TEXT.SYSTEM_NAME}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormField label={UI_TEXT.LABELS.EMAIL} error={errors.email?.message}>
          <Input id="email" type="email" {...register('email')} />
        </FormField>
        <FormField label={UI_TEXT.LABELS.PASSWORD} error={errors.password?.message}>
          <Input id="password" type="password" {...register('password')} />
        </FormField>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <Button type="submit" disabled={isLoading} variant="primary">
          {isLoading ? 'ログイン中...' : UI_TEXT.BUTTONS.LOGIN}
        </Button>
      </form>
    </div>
  );
};
