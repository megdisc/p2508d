// src/features/member/components/MemberDetail/sections/AttendanceCalendarSection/index.tsx
'use client';

import { useState, useMemo } from 'react';
import { dayjs } from '@/lib';
import { useAttendanceRecords } from '@/features/member/hooks';
import { Calendar, Button } from '@/components/ui';
import { AttendanceRecordModal } from '../../modals/AttendanceRecordModal';
import styles from './style.module.css';

interface AttendanceCalendarSectionProps {
  memberId: string;
}

export const AttendanceCalendarSection = ({
  memberId,
}: AttendanceCalendarSectionProps) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const monthStr = currentDate.format('YYYY-MM');
  const { records, isLoading, error, refetch } = useAttendanceRecords(
    memberId,
    monthStr
  );

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
    refetch();
  };

  const calendarEvents = useMemo(() => {
    return records.map((record) => ({
      date: record.date,
      content: (
        <span
          className={`${styles.eventLabel} ${
            styles[record.statusId] || styles.default
          }`}
        >
          {record.statusValue}
        </span>
      ),
    }));
  }, [records]);

  const selectedRecord = useMemo(() => {
    if (!selectedDate) return undefined;
    return records.find((r) => r.date === selectedDate);
  }, [records, selectedDate]);

  if (error) return <p>エラー: {error}</p>;

  return (
    // ★ Sectionコンポーネントを削除し、divでラップする
    <div>
      <header className={styles.header}>
        <Button onClick={handlePrevMonth}>&lt; 前の月</Button>
        <h3 className={styles.monthTitle}>{currentDate.format('YYYY年 M月')}</h3>
        <Button onClick={handleNextMonth}>次の月 &gt;</Button>
      </header>

      {isLoading ? (
        <p>読み込み中...</p>
      ) : (
        <Calendar
          year={currentDate.year()}
          month={currentDate.month() + 1}
          events={calendarEvents}
          onDateClick={handleDateClick}
        />
      )}

      <AttendanceRecordModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        memberId={memberId}
        targetDate={selectedDate}
        record={selectedRecord}
      />
    </div>
  );
};