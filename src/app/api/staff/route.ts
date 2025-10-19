// src/app/api/staff/route.ts

import { NextResponse } from 'next/server';
import staffData from '@/data/staff.json';
import contactsData from '@/data/contact.json';
import staffFacilityRolesData from '@/data/staffFacilityRoles.json';
import facilityRolesData from '@/data/facilityRoles.json';
import masterOptionsData from '@/data/masterOptions.json';

// GETリクエストに対する処理
export async function GET() {
  try {
    // ネットワークの遅延をシミュレート
    await new Promise(resolve => setTimeout(resolve, 500));

    // 職員データを加工します
    const processedStaff = staffData.map(staff => {
      // 連絡先情報を取得
      const contact = contactsData.find(c => c.id === staff.contact.id);
      
      // 雇用形態を取得
      const employmentType = masterOptionsData.find(
        opt => opt.id === staff.employmentTypeId
      );

      // 職員のB型事業所としての主要な役職を取得します（複数ある場合は最初の一つ）
      const facilityRoleAssignment = staffFacilityRolesData.find(
        assignment => assignment.staffId === staff.id
      );
      const facilityRole = facilityRolesData.find(
        role => role.id === facilityRoleAssignment?.roleId
      );

      return {
        ...staff,
        name: contact?.name || '名前不明',
        nameKana: contact?.nameKana || '', // ★ 追加
        role: facilityRole?.name || '役職未設定', // B型事業所としての役職名
        employmentType: employmentType?.value || '不明',
      };
    });

    return NextResponse.json(processedStaff);

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}