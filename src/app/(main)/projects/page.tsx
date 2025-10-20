import { ListPageLayout } from "@/components/layout";
import { ProjectList } from "@/features/project";
import { ROUTES } from "@/constants";

const ProjectsPage = () => {
  return (
    <ListPageLayout
      title="案件一覧"
      // TODO: 新規作成ページのパスを修正
      // createPath={`${ROUTES.PROJECTS}/new`}
    >
      <ProjectList />
    </ListPageLayout>
  );
};

export default ProjectsPage;
