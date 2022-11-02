import {
	SITE_MANGER_LOGIN_FAIL,
	SITE_MANGER_LOGIN_REQUEST,
	SITE_MANGER_LOGIN_SUCCESS,
	SITE_MANGER_LOGOUT,
	SITE_MANAGER_REGISTER_FAIL,
	SITE_MANAGER_REGISTER_REQUEST,
	SITE_MANAGER_REGISTER_SUCCESS,
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
