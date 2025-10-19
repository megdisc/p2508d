// src/app/(main)/staff/[id]/page.tsx

"use client";

import { StaffDetail } from "@/features/staff/components";
import { useParams } from "next/navigation";

const StaffDetailPage = () => {
  // URLから職員のIDを取得
  const { id } = useParams<{ id: string }>();

  // StaffDetailコンポーネントにIDを渡して表示
  return <StaffDetail staffId={id} />;
};

export default StaffDetailPage;