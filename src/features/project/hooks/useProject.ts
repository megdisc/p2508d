import { useEntities } from "@/hooks";
import { projectActions, projectSelectors } from "../store/projectSlice";

export const useProject = (id: string) => {
  return useEntities({
    fetch: projectActions.fetch,
    fetchAll: projectActions.fetchAll,
    selectors: projectSelectors,
    endpoint: `/api/projects/${id}`,
    id,
  });
};
