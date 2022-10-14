import {
  SUPPLIER_LOGIN_FAIL,
  SUPPLIER_LOGIN_REQUEST,
  SUPPLIER_LOGIN_SUCCESS,
  SUPPLIER_LOGOUT,
} from "../constants/supplierConstant";
import axios from "axios";
import swal from "sweetalert";

export const supplierLogin = (nic, password) => async (dispatch) => {
  try {
    dispatch({ type: SUPPLIER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/user/supplier/login",
      { nic, password },
      config
    );

    dispatch({ type: SUPPLIER_LOGIN_SUCCESS, payload: data });
    swal({
      title: "Success !!!",
      text: "Supplier Log In Successful.",
      icon: "success",
      timer: 2000,
      button: false,
    });
    setTimeout(function () {
      window.location.href = "/supplier";
    }, 2000);
    localStorage.setItem("supplierInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SUPPLIER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export function authHeader() {
  let supplier = JSON.parse(localStorage.getItem("supplierInfo"));

  if (supplier && supplier.token) {
    return { Authorization: `Bearer ${supplier.token}` };
  } else {
    return {};
  }
}

export const supplierLogout = () => async (dispatch) => {
  localStorage.removeItem("supplierInfo");
  dispatch({ type: SUPPLIER_LOGOUT });
};
