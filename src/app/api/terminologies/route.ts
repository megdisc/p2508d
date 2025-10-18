// src/app/api/terminologies/route.ts

import { NextResponse } from 'next/server';
import terminologiesData from '@/data/officeTerminologies.json';
import { OfficeTerminology } from '@/entities';

export async function GET() {
  try {
    // 本来はログイン中のユーザーのofficeIdに基づいてフィルタリングしますが、
    // ここではデモとしてoffice-1の用語設定を返します。
    const officeTerminologies = (terminologiesData as OfficeTerminology[]).filter(
      (term) => term.officeId === 'office-1'
    );

    // フロントエンドで使いやすいように、systemKeyをキーとしたオブジェクトに変換します。
    const terminologyMap = officeTerminologies.reduce(
      (acc, term) => {
        acc[term.systemKey] = term.customValue;
        return acc;
      },
      {} as Record<string, string>
    );

    return NextResponse.json(terminologyMap);
  } catch (error) {
    console.error('API Terminologies Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}