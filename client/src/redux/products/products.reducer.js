import {
  GET_PRODUCT,
  GET_PRODUCTS,
  DELETE_PRODUCT,
  PRODUCT_ERROR,
  SET_PRODUCT_LOADING,
  UNSET_PRODUCT_LOADING,
} from "./products.types";

const initialState = {
  product: null,
  products: [],
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UNSET_PRODUCT_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
