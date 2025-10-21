import { createEntitySlice } from "@/utils";
import { Project } from "@/entities";

export const projectSlice = createEntitySlice<Project>({
  name: "project",
  selectId: (entity) => entity.id,
});

export const {
  reducer: projectReducer,
  actions: projectActions,
  selectors: projectSelectors,
} = projectSlice;
