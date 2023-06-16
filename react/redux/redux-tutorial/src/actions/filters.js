import {
  COLOR_CHANGED,
  FILTER_CHANGED,
} from "../features/filters/filtersSlice";

export const statusFilterChanged = (status) => ({
  type: FILTER_CHANGED,
  payload: status,
});

export const colorFilterChanged = (color, changeType) => ({
  type: COLOR_CHANGED,
  payload: { color, changeType },
});
