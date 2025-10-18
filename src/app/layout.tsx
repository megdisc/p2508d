// src/app/layout.tsx
'use client'; // この行を必ず一番上に追加してください

import { AppProvider } from '@/providers';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}