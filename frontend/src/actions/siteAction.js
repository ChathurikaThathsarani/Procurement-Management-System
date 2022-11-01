import {
  SITE_CREATE_REQUEST,
  SITE_CREATE_SUCCESS,
  SITE_CREATE_FAIL,
  SITE_LIST_REQUEST,
  SITE_LIST_SUCCESS,
  SITE_LIST_FAIL,
  SITE_UPDATE_REQUEST,
  SITE_UPDATE_SUCCESS,
  SITE_UPDATE_FAIL,
  SITE_DELETE_REQUEST,
  SITE_DELETE_SUCCESS,
  SITE_DELETE_FAIL,
} from "../constants/siteConstants";
import axios from "axios";
import swal from "sweetalert";

export const listsiteAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SITE_LIST_REQUEST,
    });

    const {
      staff_Login: { staffInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await axios.get(`/user/staff/site/get`, config);

    dispatch({
      type: SITE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: SITE_LIST_FAIL,
      payload: message,
    });
  }
};

export const createSiteAction =
  (siteId, siteName, siteAddress, siteContactNumber, budget, siteManagerName) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: SITE_CREATE_REQUEST,
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
        `/user/staff/site/create`,
        {
          siteId,
          siteName,
          siteAddress,
          siteContactNumber,
          budget,
          siteManagerName,
        },
        
        config
    
      );
          console.log(data);
      swal({
        title: "Success !!!",
        text: "A Site successfully created.",
        icon: "success",
        timer: 2000,
        button: false,
      });
      setTimeout(function () {
        window.location.href = "/site-management-view";
      }, 2000);

      dispatch({
        type: SITE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message = "Site creation failed";
      dispatch({
        type: SITE_CREATE_FAIL,
        payload: message,
      });

      swal({
        title: "Error!",
        text: "Plese select a manager",
        type: "Error",
      });
    }
  };

export const updateSiteAction =
  (id,siteId, siteName, siteAddress, siteContactNumber, budget, siteManager) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: SITE_UPDATE_REQUEST,
      });

      const {
        staff_Login: { staffInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${staffInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `/user/staff/site/get/${id}`,
        {
          siteId,
          siteName,
          siteAddress,
          siteContactNumber,
          budget,
          siteManager,
        },
        config
      );

      dispatch({
        type: SITE_UPDATE_SUCCESS,
        payload: data,
      });
      swal({
        title: "Success !!!",
        text: "Site successfully updated.",
        icon: "success",
        timer: 2000,
        button: false,
      });
      setTimeout(function () {
        window.location.href = "/site-management-view";
      }, 2000);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: SITE_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteSiteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SITE_DELETE_REQUEST,
    });

    const {
      staff_Login: { staffInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/user/staff/site/get/${id}`, config);

    dispatch({
      type: SITE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: SITE_DELETE_FAIL,
      payload: message,
    });
  }
};
