import { NextResponse } from 'next/server';
import authUsersData from '@/data/authUsers.json';
import { AuthUser } from '@/entities';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // 本来はデータベースを検索しパスワードを検証しますが、
    // ここでは email が data/authUsers.json に存在するかどうかを確認します。
    const user = (authUsersData as AuthUser[]).find(u => u.email === email);

    if (user) {
      // パスワード等の機密情報は返却しないようにします。
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
    }
  } catch (error) {
    console.error('API Auth Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}