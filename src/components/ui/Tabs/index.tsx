// src/components/ui/Tabs/index.tsx
'use client';

import { useState, ReactNode } from 'react';
import styles from './style.module.css';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className={styles.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={`${styles.tabItem} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContentWrapper}>
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className={`${styles.tabContent} ${activeTab === index ? styles.active : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};