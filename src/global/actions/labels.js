import { GET_PAGE_LABELS, GET_PAGE_LABELS_FINISHED } from "../types/labels";

export const requestPageLabels = (page, pageAlias) => ({
  type: GET_PAGE_LABELS,
  page,
  pageAlias,
});

export const requestPageLabelsFinished = (pageLabels) => ({
  type: GET_PAGE_LABELS_FINISHED,
  pageLabels,
});
