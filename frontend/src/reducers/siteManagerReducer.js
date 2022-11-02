/**
 *These are the reducers of site manager
 *which keeps states of the site manager actions
 */
import {
	SITE_MANGER_LOGIN_FAIL,
	SITE_MANGER_LOGIN_REQUEST,
	SITE_MANGER_LOGIN_SUCCESS,
	SITE_MANGER_LOGOUT,
	SITE_MANAGER_REGISTER_FAIL,
	SITE_MANAGER_REGISTER_REQUEST,
	SITE_MANAGER_REGISTER_SUCCESS,
} from "../constants/siteManagerConstant";

/**
 * This reducer is implemented to
 * login a site manager
 */
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

/**
 * This reducer is implemented to
 * register a site manager
 */
export const siteManagerRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case SITE_MANAGER_REGISTER_REQUEST:
			return { loading: true };
		case SITE_MANAGER_REGISTER_SUCCESS:
			return { loading: false, siteManagerInfo: action.payload };
		case SITE_MANAGER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
