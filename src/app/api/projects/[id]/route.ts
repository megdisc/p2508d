import { NextResponse } from "next/server";
import projects from "@/data/projects.json";
import clients from "@/data/clients.json";
import staff from "@/data/staff.json";
import masterOptions from "@/data/masterOptions.json";
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

  const client = clients.find((c) => c.id === project.clientId);
  const staffMember = staff.find((s) => s.id === project.assignedStaffId);
  const status = masterOptions.find(o => o.id === project.statusId);

  const detailedProject = {
    ...project,
    clientName: client?.contact.name || "N/A",
    staffName: staffMember?.contact.name || "N/A",
    status: status?.value || "N/A",
    deadline: project.deliveryDate,
  };

  return NextResponse.json(detailedProject as Project);
};
