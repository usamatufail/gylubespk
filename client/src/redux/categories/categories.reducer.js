import {
  GET_CATEGORY,
  GET_CATEGORIES,
  DELETE_CATEGORY,
  CATEGORY_ERROR,
  SET_CATEGORY_LOADING,
  UNSET_CATEGORY_LOADING,
} from "./categories.types";

const initialState = {
  category: null,
  categories: [],
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== payload
        ),
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UNSET_CATEGORY_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
