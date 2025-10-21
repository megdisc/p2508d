// src/app/api/members/route.ts

import { NextResponse } from 'next/server';
import membersData from '@/data/members.json';
import masterOptionsData from '@/data/masterOptions.json';
import contactsData from '@/data/contact.json';
import type { Contact } from '@/entities'; // Contact型をインポート

// data/contact.json の型アサーションを追加
const contacts: Contact[] = contactsData as Contact[];

// GETリクエスト（データの取得要求）に対する処理
export async function GET() {
  try {
    // 実際のAPIのように、少し時間がかかるのをシミュレートします
    await new Promise(resolve => setTimeout(resolve, 500));

    // data/内の複数のJSONを組み合わせて、フロントエンドが使いやすい形にデータを加工します
    const processedMembers = membersData.map(member => {
      // statusIdから、対応する日本語のステータス名を取得
      const statusOption = masterOptionsData.find(
        opt => opt.id === member.statusId && opt.category === 'MEMBER_STATUS'
      );

      // contactIdから、対応する連絡先情報を取得
      const contactInfo = contacts.find(c => c.id === member.contact.id); // 型アサーションを適用した変数を使用

      // ★ 修正点: firstName と lastName を結合して name を生成
      const name = contactInfo ? `${contactInfo.lastName} ${contactInfo.firstName}` : '名前不明';

      return {
        ...member,
        // フロントエンドで表示しやすいように、関連データを結合して返す
        name: name, // 生成した name を使用
        status: statusOption?.value || 'ステータス不明',
        // 必要であれば contact オブジェクト全体も返す
        // contact: contactInfo // 必要に応じてコメント解除
      };
    });

    // 加工したデータをJSON形式でクライアント（ブラウザ）に返します
    return NextResponse.json(processedMembers);

  } catch (error) {
    // もしエラーが発生した場合は、エラーメッセージを返します
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}