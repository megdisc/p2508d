// src/app/api/staff/[id]/route.ts

import { NextResponse } from "next/server";
import type { Staff } from "@/entities";
import staffData from "@/data/staff.json";

// staff.jsonのデータに型アサーションを適用
const staffList: Staff[] = staffData as Staff[];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const staffId = params.id;

  // URLから取得したIDに一致する職員を検索
  const staffMember = staffList.find((s) => s.id === staffId);

  if (!staffMember) {
    // 該当する職員が見つからない場合は404エラーを返す
    return NextResponse.json({ error: "Staff not found" }, { status: 404 });
  }

  // 職員データをJSON形式で返す
  return NextResponse.json(staffMember);
}