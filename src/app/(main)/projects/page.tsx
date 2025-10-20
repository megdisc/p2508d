// src/app/(main)/projects/page.tsx
'use client';

// インポートパスを修正
import { ProjectList } from '@/features/project';
import { ListPageLayout } from '@/components/layout';

const ProjectsPage = () => {
  return (
    <ListPageLayout pageTitle="案件一覧">
      <ProjectList />
    </ListPageLayout>
  );
};

export default ProjectsPage;