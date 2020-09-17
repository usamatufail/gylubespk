import { combineReducers } from "redux";

import categoriesReducer from "./categories/categories.reducer";
import productsReducer from "./products/products.reducer";
import usersReducer from "./users/users.reducer";

const createRootReducer = () =>
  combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    users: usersReducer,
  });

export default createRootReducer;
