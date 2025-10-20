"use client";

import { useRouter } from "next/navigation";
import { ResourceList } from "@/components/ui";
import { ROUTES } from "@/constants";
import { Project } from "@/entities";
import { useProjects } from "../../hooks/useProjects";

export const ProjectList = () => {
  const router = useRouter();
  const { entities: projects, error, loading } = useProjects();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ResourceList<Project>
      columns={[
        {
          field: "name",
          headerName: "案件名",
          renderCell: ({ row }) => <span>{row.name}</span>,
        },
        {
          field: "clientName",
          headerName: "顧客名",
        },
        {
          field: "staffName",
          headerName: "担当職員",
        },
        {
          field: "deadline",
          headerName: "納期",
        },
        {
          field: "status",
          headerName: "ステータス",
        },
      ]}
      rows={projects}
      onRowClick={(row) => router.push(`${ROUTES.PROJECTS}/${row.id}`)}
      onDeleteClick={(row) => {
        // TODO: 削除処理を実装
        console.log("delete", row.id);
      }}
    />
  );
};
