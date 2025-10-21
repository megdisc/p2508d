import { NextResponse } from "next/server";
import projects from "@/data/projects.json";
import clients from "@/data/clients.json";
import staff from "@/data/staff.json";
import masterOptions from "@/data/masterOptions.json";
import { Project } from "@/entities";

export const GET = async () => {
  const clientMap = new Map(clients.map((c) => [c.id, c.contact.name]));
  const staffMap = new Map(staff.map((s) => [s.id, s.contact.name]));
  const statusMap = new Map(masterOptions.filter(o => o.category === "PROJECT_STATUS").map(o => [o.id, o.value]));

  const detailedProjects = projects.map((p) => ({
    ...p,
    clientName: clientMap.get(p.clientId) || "N/A",
    staffName: staffMap.get(p.assignedStaffId) || "N/A",
    status: statusMap.get(p.statusId) || "N/A",
    deadline: p.deliveryDate, // deliveryDateをdeadlineにマッピング
  }));

  return NextResponse.json(detailedProjects as Project[]);
};
