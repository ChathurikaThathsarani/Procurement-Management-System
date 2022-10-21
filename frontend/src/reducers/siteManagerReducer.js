import {
  SITE_MANGER_LOGIN_FAIL,
  SITE_MANGER_LOGIN_REQUEST,
  SITE_MANGER_LOGIN_SUCCESS,
  SITE_MANGER_LOGOUT,
} from "../constants/siteManagerConstant";

export const siteMangerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SITE_MANGER_LOGIN_REQUEST:
      return { loading: true };
    case SITE_MANGER_LOGIN_SUCCESS:
      return { loading: false, siteManagerInfo: action.payload };
    case SITE_MANGER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case SITE_MANGER_LOGOUT:
      return {};

    default:
      return state;
  }
};
