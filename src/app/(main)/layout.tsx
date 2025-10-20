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

    const resizeObserver = new ResizeObserver(updateMargin);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    updateMargin();

    return () => {
      if (headerRef.current) {
        resizeObserver.unobserve(headerRef.current);
      }
    };
  }, []);

  const layoutStyle: CSSProperties = {
    marginLeft: `${marginLeft}px`,
    padding: "2rem",
    width: `calc(100% - ${marginLeft}px)`,
    boxSizing: "border-box",
  };

  return (
    <>
      {/* Material Icons の読み込みを追加 */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <Header ref={headerRef} />
      <main style={layoutStyle}>{children}</main>
    </>
  );
};

export default MainLayout;