import { NextResponse } from "next/server";
import projects from "@/data/projects.json";
import clients from "@/data/clients.json";
import staff from "@/data/staff.json";
import { Project } from "@/entities";

export const GET = async () => {
  // 顧客と職員のデータをIDでルックアップできるマップを作成
  const clientMap = new Map(clients.map((c) => [c.id, c.name]));
  const staffMap = new Map(staff.map((s) => [s.id, `${s.lastName}${s.firstName}`]));

  // 案件データに関連情報を付加
  const detailedProjects = projects.map((p) => ({
    ...p,
    clientName: clientMap.get(p.clientId) || "N/A",
    staffName: staffMap.get(p.staffId) || "N/A",
  }));

  return NextResponse.json(detailedProjects as Project[]);
};
