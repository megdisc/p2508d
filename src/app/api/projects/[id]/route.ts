import { NextResponse } from "next/server";
import projects from "@/data/projects.json";
import clients from "@/data/clients.json";
import staff from "@/data/staff.json";
import { Project } from "@/entities";

type Props = {
  params: {
    id: string;
  };
};

export const GET = async (_: Request, { params }: Props) => {
  const projectId = params.id;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  // 関連情報を検索
  const client = clients.find((c) => c.id === project.clientId);
  const staffMember = staff.find((s) => s.id === project.staffId);

  // 案件データに関連情報を付加
  const detailedProject = {
    ...project,
    clientName: client?.name || "N/A",
    staffName: staffMember ? `${staffMember.lastName}${staffMember.firstName}` : "N/A",
  };

  return NextResponse.json(detailedProject as Project);
};
