// src/app/api/members/[id]/route.ts
import { NextResponse } from 'next/server';
import membersData from '@/data/members.json';
import masterOptionsData from '@/data/masterOptions.json';
import contactsData from '@/data/contact.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const memberId = params.id;
    const member = membersData.find(m => m.id === memberId);

    if (!member) {
      return NextResponse.json({ message: 'Member not found' }, { status: 404 });
    }
    
    // 関連データを結合
    const statusOption = masterOptionsData.find(
      opt => opt.id === member.statusId
    );
    const contactInfo = contactsData.find(c => c.id === member.contact.id);

    const processedMember = {
      ...member,
      name: contactInfo?.name || '名前不明',
      status: statusOption?.value || 'ステータス不明',
      contact: {
        ...member.contact,
        ...contactInfo
      }
    };

    return NextResponse.json(processedMember);

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}