// src/app/(main)/layout.tsx

"use client";

import { Header } from "@/components";
import React, {
  useState,
  useLayoutEffect,
  useRef,
  ReactNode,
  CSSProperties,
} from "react";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const headerRef = useRef<HTMLElement>(null);
  const [marginLeft, setMarginLeft] = useState(0);

  useLayoutEffect(() => {
    const updateMargin = () => {
      if (headerRef.current) {
        setMarginLeft(headerRef.current.offsetWidth);
      }
    };

    // ResizeObserverを使用して、headerのサイズ変更を監視
    const resizeObserver = new ResizeObserver(updateMargin);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    updateMargin(); // 初期マウント時にも実行

    return () => {
      if (headerRef.current) {
        resizeObserver.unobserve(headerRef.current);
      }
    };
  }, []);

  // メインコンテンツのスタイルを定義
  const layoutStyle: CSSProperties = {
    marginLeft: `${marginLeft}px`,
    padding: "2rem",
    // ★ 変更点: widthの計算を元に戻す
    width: `calc(100% - ${marginLeft}px)`,
    // ★ 変更点: box-sizingプロパティを追加
    boxSizing: "border-box",
  };

  return (
    <>
      <Header ref={headerRef} />
      <main style={layoutStyle}>{children}</main>
    </>
  );
};

export default MainLayout;