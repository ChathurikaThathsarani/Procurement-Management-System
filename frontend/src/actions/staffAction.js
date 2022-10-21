import {
  STAFF_LOGIN_FAIL,
  STAFF_LOGIN_REQUEST,
  STAFF_LOGIN_SUCCESS,
  STAFF_LOGOUT,
} from "../constants/staffConstant";
import axios from "axios";
import swal from "sweetalert";

export const staffLogin = (nic, password) => async (dispatch) => {
  try {
    dispatch({ type: STAFF_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/user/staff/login",
      { nic, password },
      config
    );

    dispatch({ type: STAFF_LOGIN_SUCCESS, payload: data });
    swal({
      title: "Success !!!",
      text: "Procurement Staff In Successful.",
      icon: "success",
      timer: 2000,
      button: false,
    });
    setTimeout(function () {
      window.location.href = "/staff";
    }, 2000);
    localStorage.setItem("staffInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: STAFF_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export function authHeader() {
  let staff = JSON.parse(localStorage.getItem("staffInfo"));

  if (staff && staff.token) {
    return { Authorization: `Bearer ${staff.token}` };
  } else {
    return {};
  }
}

export const staffLogout = () => async (dispatch) => {
  localStorage.removeItem("staffInfo");
  dispatch({ type: STAFF_LOGOUT });
};
