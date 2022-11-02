import {
	SUPPLIER_LOGIN_FAIL,
	SUPPLIER_LOGIN_REQUEST,
	SUPPLIER_LOGIN_SUCCESS,
	SUPPLIER_LOGOUT,
	SUPPLIER_REGISTER_FAIL,
	SUPPLIER_REGISTER_REQUEST,
	SUPPLIER_REGISTER_SUCCESS,
} from "../constants/supplierConstant";

export const supplierLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case SUPPLIER_LOGIN_REQUEST:
			return { loading: true };
		case SUPPLIER_LOGIN_SUCCESS:
			return { loading: false, supplierInfo: action.payload };
		case SUPPLIER_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case SUPPLIER_LOGOUT:
			return {};

		default:
			return state;
	}
};

export const supplierRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case SUPPLIER_REGISTER_REQUEST:
			return { loading: true };
		case SUPPLIER_REGISTER_SUCCESS:
			return { loading: false, supplierInfo: action.payload };
		case SUPPLIER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
