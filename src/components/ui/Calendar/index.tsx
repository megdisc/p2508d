// src/components/ui/Calendar/index.tsx
'use client';

import { useMemo, ReactNode } from 'react';
import { dayjs } from '@/lib';
import styles from './style.module.css';

type CalendarEvent = {
  date: string; // YYYY-MM-DD
  content: ReactNode;
};

interface CalendarProps {
  year: number;
  month: number;
  events?: CalendarEvent[];
  onDateClick: (date: string) => void; // YYYY-MM-DD
}

export const Calendar = ({
  year,
  month,
  events = [],
  onDateClick,
}: CalendarProps) => {
  const calendarGrid = useMemo(() => {
    const date = dayjs(`${year}-${month}-01`);
    const firstDayOfMonth = date.startOf('month');
    const lastDayOfMonth = date.endOf('month');
    const startDayOfWeek = firstDayOfMonth.day(); // 0 (Sun) - 6 (Sat)

    const days = [];
    // 月の始まる前の空白セル
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(<div key={`empty-start-${i}`} className={styles.emptyCell} />);
    }
    // 月の日付セル
    for (let i = 1; i <= lastDayOfMonth.date(); i++) {
      const currentDate = firstDayOfMonth.date(i);
      const dateStr = currentDate.format('YYYY-MM-DD');
      const dayEvents = events.filter((e) => e.date === dateStr);

      days.push(
        <div
          key={dateStr}
          className={`${styles.dayCell} ${
            currentDate.isSame(dayjs(), 'day') ? styles.today : ''
          }`}
          onClick={() => onDateClick(dateStr)}
        >
          <div className={styles.dayNumber}>{i}</div>
          <div className={styles.eventsContainer}>
            {dayEvents.map((event, index) => (
              <div key={index}>{event.content}</div>
            ))}
          </div>
        </div>
      );
    }
    return days;
  }, [year, month, events, onDateClick]);

  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <div className={styles.calendar}>
      <div className={styles.weekdays}>
        {weekdays.map((day) => (
          <div key={day} className={styles.weekday}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.grid}>{calendarGrid}</div>
    </div>
  );
};