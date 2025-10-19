// src/app/api/members/[id]/attendance/route.ts

import { NextResponse } from 'next/server';
import attendanceRecordsData from '@/data/attendanceRecords.json';
import masterOptionsData from '@/data/masterOptions.json';
import { AttendanceRecord } from '@/entities';

// GETリクエストに対する処理
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const memberId = params.id;
    // URLから対象月を取得 (例: /api/members/mem-1/attendance?month=2025-10)
    const { searchParams } = new URL(request.url);
    const month = searchParams.get('month'); // 'YYYY-MM'形式

    if (!month) {
      return NextResponse.json(
        { message: 'Month parameter is required' },
        { status: 400 }
      );
    }

    // 対象利用者の、指定された月の利用記録をフィルタリング
    const memberRecords = (attendanceRecordsData as AttendanceRecord[]).filter(
      (record) =>
        record.memberId === memberId && record.date.startsWith(month)
    );

    // フロントエンドで使いやすいようにステータスの文言を結合
    const processedRecords = memberRecords.map((record) => {
      const status = masterOptionsData.find(
        (opt) => opt.id === record.statusId
      );
      return {
        ...record,
        statusValue: status?.value || '不明',
      };
    });

    // ネットワーク遅延をシミュレート
    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json(processedRecords);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}