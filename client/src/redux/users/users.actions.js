import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_USERS,
  SET_USER_LOADING,
  UNSET_USER_LOADING,
} from "./users.types";
import setAuthToken from "../../util/setAuthToken";

//Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: SET_USER_LOADING });
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    dispatch({ type: UNSET_USER_LOADING });
  } catch (err) {
    dispatch({ type: SET_USER_LOADING });
    dispatch({
      type: AUTH_ERROR,
    });
    dispatch({ type: UNSET_USER_LOADING });
  }
};

//Load users
export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: SET_USER_LOADING });
    const res = await axios.get("/api/users/all");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
    dispatch({ type: UNSET_USER_LOADING });
  } catch (err) {
    dispatch({ type: SET_USER_LOADING });
    dispatch({
      type: AUTH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch({ type: UNSET_USER_LOADING });
  }
};

//Register User
export const register = ({ name, email, password, role }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let body;
  if (role) {
    body = JSON.stringify({ name, email, password, role });
  } else {
    const defaultBody = {
      name,
      email,
      password,
      role: "user",
    };
    body = JSON.stringify(defaultBody);
  }
  try {
    dispatch({ type: SET_USER_LOADING });
    const res = await axios.post("/api/users/register", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch({ type: UNSET_USER_LOADING });
  } catch (err) {
    dispatch({ type: SET_USER_LOADING });
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
    dispatch({
      type: REGISTER_FAIL,
    });
    dispatch({ type: UNSET_USER_LOADING });
  }
};

//Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    dispatch({ type: SET_USER_LOADING });
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch({ type: UNSET_USER_LOADING });
  } catch (err) {
    dispatch({ type: SET_USER_LOADING });
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch({ type: UNSET_USER_LOADING });
  }
};

//Logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
