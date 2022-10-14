import {
  SITE_MANGER_LOGIN_FAIL,
  SITE_MANGER_LOGIN_REQUEST,
  SITE_MANGER_LOGIN_SUCCESS,
  SITE_MANGER_LOGOUT,
} from "../constants/siteManagerConstant";
import axios from "axios";
import swal from "sweetalert";

export const siteManagerLogin = (nic, password) => async (dispatch) => {
  try {
    dispatch({ type: SITE_MANGER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/user/manager/login",
      { nic, password },
      config
    );

    dispatch({ type: SITE_MANGER_LOGIN_SUCCESS, payload: data });
    swal({
      title: "Success !!!",
      text: "Site Manager Log In Successful.",
      icon: "success",
      timer: 2000,
      button: false,
    });
    setTimeout(function () {
      window.location.href = "/site-manager";
    }, 2000);
    localStorage.setItem("siteManagerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SITE_MANGER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export function authHeader() {
  let siteManager = JSON.parse(localStorage.getItem("siteManagerInfo"));

  if (siteManager && siteManager.token) {
    return { Authorization: `Bearer ${siteManager.token}` };
  } else {
    return {};
  }
}

export const siteMangerLogout = () => async (dispatch) => {
  localStorage.removeItem("siteManagerInfo");
  dispatch({ type: SITE_MANGER_LOGOUT });
};
