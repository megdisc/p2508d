// src/app/(main)/dashboard/page.tsx
'use client';

import { SectionPageLayout } from '@/components/layout';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import styles from './style.module.css';

const DashboardPage = () => {
  return (
    <SectionPageLayout pageTitle="ダッシュボード">
      <div className={styles.grid}>
        <div className={styles.announcements}>
          <Section title="お知らせ">
            <ul className={styles.list}>
              <li>【メンテナンス】10月28日(火) 午前2:00-4:00にシステムメンテナンスを実施します。</li>
              <li>【重要】新しい工賃評価システムが11月1日より導入されます。</li>
              <li>【イベント】12月5日にクリスマス会を開催します。詳細は掲示板をご確認ください。</li>
            </ul>
          </Section>
        </div>

        <div className={styles.schedule}>
          <Section title="今日の予定">
            <ul className={styles.list}>
              <li>09:00 - 10:00 朝礼・清掃</li>
              <li>10:00 - 12:00 生産活動 (A班: 部品組立, B班: 梱包)</li>
              <li>12:00 - 13:00 昼休憩</li>
              <li>13:00 - 15:00 生産活動 (A班: 検品, B班: 発送準備)</li>
              <li>15:00 - 15:30 清掃・終礼</li>
            </ul>
          </Section>
        </div>

        <div className={styles.quickLinks}>
          <Section title="クイックリンク">
            <div className={styles.linkGrid}>
              <Link href="/records" className={styles.linkItem}>
                <span className="material-icons">edit_note</span>
                <span>日誌入力</span>
              </Link>
              <Link href="/members" className={styles.linkItem}>
                <span className="material-icons">groups</span>
                <span>メンバー管理</span>
              </Link>
              <Link href="/projects" className={styles.linkItem}>
                <span className="material-icons">work</span>
                <span>案件管理</span>
              </Link>
              <Link href="/accounting" className={styles.linkItem}>
                <span className="material-icons">receipt_long</span>
                <span>会計管理</span>
              </Link>
            </div>
          </Section>
        </div>

        <div className={styles.activity}>
          <Section title="最近のアクティビティ">
            <ul className={styles.list}>
              <li>田中さんが新しい支援計画書を作成しました。</li>
              <li>「株式会社テック」の新規案件が登録されました。</li>
              <li>鈴木さんが佐藤さんの面談記録を更新しました。</li>
            </ul>
          </Section>
        </div>
      </div>
    </SectionPageLayout>
  );
};

export default DashboardPage;
