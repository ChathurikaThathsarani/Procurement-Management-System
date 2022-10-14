import {
  STAFF_LOGIN_FAIL,
  STAFF_LOGIN_REQUEST,
  STAFF_LOGIN_SUCCESS,
  STAFF_LOGOUT,
} from "../constants/staffConstant";

export const staffLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_LOGIN_REQUEST:
      return { loading: true };
    case STAFF_LOGIN_SUCCESS:
      return { loading: false, staffInfo: action.payload };
    case STAFF_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_LOGOUT:
      return {};

    default:
      return state;
  }
};
