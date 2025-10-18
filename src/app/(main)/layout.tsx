// src/app/(main)/layout.tsx
'use client'; 

import { Header } from '@/components';
import { useAuth } from '@/features/auth';
import { redirect } from 'next/navigation';
// ★ usePathname と useEffect を削除
import { useRef, useLayoutEffect, useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const headerRef = useRef<HTMLElement>(null);
  const [marginLeft, setMarginLeft] = useState(240); 
  // ★ opacity と pathname の state を削除

  if (!isAuthenticated) {
    redirect('/login');
  }

  useLayoutEffect(() => {
    const updateMargin = () => {
      if (headerRef.current) {
        setMarginLeft(headerRef.current.offsetWidth);
      }
    };
    updateMargin();
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  }, []);

  // ★ opacity を変更する useEffect を削除

  // ★ layoutStyle から opacity と transition を削除
  const layoutStyle: React.CSSProperties = {
    marginLeft: `${marginLeft}px`,
    padding: '2rem',
    width: `calc(100% - ${marginLeft}px)`,
  };

  return (
    <>
      <Header ref={headerRef} />
      {/* ★ id を削除 */}
      <main style={layoutStyle}>
        {children}
      </main>
    </>
  );
}