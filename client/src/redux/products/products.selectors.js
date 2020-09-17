import { createSelector } from "reselect";

const selectProducts = (state) => state.products;

export const productsSelector = createSelector(
  [selectProducts],
  (products) => products.products
);

export const selectCategoryProducts = (categoryUrlParam) =>
  createSelector([productsSelector], (products) => {
    if (products) {
      return products.filter(
        (product) => product.category.urlSlug === categoryUrlParam
      );
    }
  });
