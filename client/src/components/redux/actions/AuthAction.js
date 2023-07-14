import axios from "axios";
import {
  loadUserFailed,
  loadUserRequest,
  loadUserSuccess,
  loginFailed,
  loginRequest,
  loginSuccess,
  logoutFailed,
  logoutSuccess,
} from "../slices/AuthSlice";

//Login action controller
export const loginAction = (userData, error) => async (dispatch) => {
  console.log(userData);
  let uri = "/api/v1/login";
  if (userData) {
    try {
      dispatch(loginRequest());
      await axios.post(uri, { userData });
      dispatch(loginSuccess(userData));
    } catch (error) {
      dispatch(loginFailed(error));
    }
  } else {
    dispatch(loginFailed(error));
  }
};

//Load Logged in user Data
export const loadUser = async (dispatch) => {
  let uri = "/api/v1/myprofile";
  try {
    dispatch(loadUserRequest());

    const { data } = await axios.get(uri, {
      withCredntials: true,
      credentials: "include",
    });
    console.log(data);
    dispatch(loadUserSuccess(data));
  } catch (error) {
    dispatch(loadUserFailed(error.response.data.message));
  }
};

//log out Action Controller
export const logout = (id) => async (dispatch) => {
  let uri = "/api/v1/user/logout/" + id;
  try {
    await axios.get(uri);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailed(error.response.data.message));
  }
};
