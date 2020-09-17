import {
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  SET_PRODUCT_LOADING,
  UNSET_PRODUCT_LOADING,
} from "./products.types";
import axios from "axios";

//Create Product
export const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_PRODUCT_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/products/add", formData, config);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
    dispatch(getProducts());
    dispatch({ type: UNSET_PRODUCT_LOADING });
  } catch (err) {
    dispatch({ type: SET_PRODUCT_LOADING });
    const errors = err.response.data.errors;
    if (errors) {
    }
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch({ type: UNSET_PRODUCT_LOADING });
  }
};

//Update Product
export const updateProduct = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: SET_PRODUCT_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(`/api/products/edit/${id}`, formData, config);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
    dispatch(getProducts());
    dispatch({ type: UNSET_PRODUCT_LOADING });
  } catch (err) {
    dispatch({ type: SET_PRODUCT_LOADING });
    const errors = err.response.data.errors;
    if (errors) {
      // errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch({ type: UNSET_PRODUCT_LOADING });
  }
};

//get all products
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: SET_PRODUCT_LOADING });
    const res = await axios.get("/api/products/allPopulated");
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
    dispatch({ type: UNSET_PRODUCT_LOADING });
  } catch (err) {
    dispatch({ type: SET_PRODUCT_LOADING });
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: "error", status: "error" },
    });
    dispatch({ type: UNSET_PRODUCT_LOADING });
  }
};

export const deleteProduct = (Id) => async (dispatch) => {
  try {
    dispatch({ type: SET_PRODUCT_LOADING });
    await axios.delete(`/api/products/delete/${Id}`);

    // dispatch({ type: GET_CATEGORY });
    dispatch(getProducts());
    dispatch({ type: UNSET_PRODUCT_LOADING });
  } catch (err) {
    dispatch({ type: SET_PRODUCT_LOADING });
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch({ type: UNSET_PRODUCT_LOADING });
  }
};
