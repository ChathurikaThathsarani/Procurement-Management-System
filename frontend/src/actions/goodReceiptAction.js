import {
  GOOD_RECEIPT_LIST_REQUEST,
  GOOD_RECEIPT_LIST_SUCCESS,
  GOOD_RECEIPT_LIST_FAIL,
  GOOD_RECEIPT_CREATE_REQUEST,
  GOOD_RECEIPT_CREATE_SUCCESS,
  GOOD_RECEIPT_CREATE_FAIL,
} from "../constants/goodReceiptConstant";
import axios from "axios";
import swal from "sweetalert";

export const listGoodReceipts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GOOD_RECEIPT_LIST_REQUEST,
    });

    const {
      staff_Login: { staffInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await axios.get(`/user/staff/good-receipts`, config);

    dispatch({
      type: GOOD_RECEIPT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: GOOD_RECEIPT_LIST_FAIL,
      payload: message,
    });
  }
};

export const createGoodReceiptAction =
  (orderNo, productName, productQuantity, deliveryDate) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: GOOD_RECEIPT_CREATE_REQUEST,
      });

      const {
        staff_Login: { staffInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${staffInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `/user/staff/good-receipt/create`,
        { orderNo, productName, productQuantity, deliveryDate },
        config
      );
      swal({
        title: "Success !!!",
        text: "Good Receipt successfully created.",
        icon: "success",
        timer: 2000,
        button: false,
      });

      setTimeout(function () {
        window.location.href = "/good-receipts";
      }, 2000);
      dispatch({
        type: GOOD_RECEIPT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: GOOD_RECEIPT_CREATE_FAIL,
        payload: message,
      });
    }
  };
