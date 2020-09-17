import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const categoriesSelector = createSelector(
  [selectCategories],
  (categories) => categories.categories
);
