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

export const SiteListReducer = (
  state = { workoutSchedules: [] },
  action
) => {
  switch (action.type) {
    case WORKOUT_SCHEDULE_LIST_REQUEST:
      return { loading: true };
    case WORKOUT_SCHEDULE_LIST_SUCCESS:
      return { loading: false, workoutSchedules: action.payload };
    case WORKOUT_SCHEDULE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const SiteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SITE_CREATE_REQUEST:
      return { loading: true };
    case SITE_CREATE_SUCCESS:
      return { loading: false, success: true };
    case SITE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const SiteUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SITE_UPDATE_REQUEST:
      return { loading: true };
    case WORKOUT_SCHEDULE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case WORKOUT_SCHEDULE_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const SiteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SITE_DELETE_REQUEST:
      return { loading: true };
    case SITE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SITE_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
