import {
	STAFF_LOGIN_FAIL,
	STAFF_LOGIN_REQUEST,
	STAFF_LOGIN_SUCCESS,
	STAFF_LOGOUT,
	STAFF_REGISTER_FAIL,
	STAFF_REGISTER_REQUEST,
	STAFF_REGISTER_SUCCESS,
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

export const staffRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case STAFF_REGISTER_REQUEST:
			return { loading: true };
		case STAFF_REGISTER_SUCCESS:
			return { loading: false, staffInfo: action.payload };
		case STAFF_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
