"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { DetailPageLayout } from "@/components/layout";
import { SubNav } from "@/components/ui";
import { useProject } from "../../hooks/useProject";
import { BasicInfoSection, ProcessSection, FinanceSection } from "./sections";

const SUB_NAV_ITEMS = [
  { label: "基本情報", value: "basic" },
  { label: "工程管理", value: "process" },
  { label: "収支管理", value: "finance" },
];

export const ProjectDetail = () => {
  const { id } = useParams();
  const { entity: project, error, loading } = useProject(id as string);
  const [currentTab, setCurrentTab] = useState(SUB_NAV_ITEMS[0].value);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!project) return <p>Project not found.</p>;

  return (
    <DetailPageLayout
      title={project.name}
      subnav={<SubNav items={SUB_NAV_ITEMS} value={currentTab} onChange={setCurrentTab} />}
    >
      {currentTab === "basic" && <BasicInfoSection />}
      {currentTab === "process" && <ProcessSection />}
      {currentTab === "finance" && <FinanceSection />}
    </DetailPageLayout>
  );
};
