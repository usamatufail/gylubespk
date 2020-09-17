import {
  GET_CATEGORY,
  GET_CATEGORIES,
  CATEGORY_ERROR,
  SET_CATEGORY_LOADING,
  UNSET_CATEGORY_LOADING,
} from "./categories.types";
import axios from "axios";
//Create Category
export const createCategory = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_CATEGORY_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    debugger;
    const res = await axios.post("/api/categories/add", formData, config);
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    });
    // dispatch(setAlert("Category Created", "success"));
    dispatch(getCategories());
    // dispatch({ type: UNSET_CATEGORY_LOADING });
  } catch (err) {
    dispatch({ type: SET_CATEGORY_LOADING });
    const errors = err.response.data.errors;
    if (errors) {
      // errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch({ type: UNSET_CATEGORY_LOADING });
  }
};

//Update Category
export const updateCategory = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: SET_CATEGORY_LOADING });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `/api/categories/edit/${id}`,
      formData,
      config
    );

    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    });
    dispatch(getCategories());
  } catch (err) {
    dispatch({ type: SET_CATEGORY_LOADING });
    const errors = err.response.data.errors;

    if (errors) {
      // errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch({ type: UNSET_CATEGORY_LOADING });
  }
};

//get all categories
export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: SET_CATEGORY_LOADING });
    const res = await axios.get("/api/categories/all");
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
    dispatch({ type: UNSET_CATEGORY_LOADING });
  } catch (err) {
    dispatch({ type: SET_CATEGORY_LOADING });
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: "error", status: "error" },
    });
    dispatch({ type: UNSET_CATEGORY_LOADING });
  }
};

export const deleteCategory = (Id) => async (dispatch) => {
  try {
    dispatch({ type: SET_CATEGORY_LOADING });
    await axios.delete(`/api/categories/delete/${Id}`);

    dispatch({ type: GET_CATEGORY });
    dispatch(getCategories());
    dispatch({ type: UNSET_CATEGORY_LOADING });
    // dispatch(setAlert("Category Deleted Successfully", "danger"));
  } catch (err) {
    dispatch({ type: SET_CATEGORY_LOADING });
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch({ type: UNSET_CATEGORY_LOADING });
  }
};
