import {
	PRODUCT_CREATE_FAIL,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	VIEW_PRODUCT_FOR_SITE_MANAGER_LIST_FAIL,
	VIEW_PRODUCT_FOR_SITE_MANAGER_LIST_REQUEST,
	VIEW_PRODUCT_FOR_SITE_MANAGER_LIST_SUCCESS,
	VIEW_PRODUCT_FOR_STAFF_LIST_FAIL,
	VIEW_PRODUCT_FOR_STAFF_LIST_REQUEST,
	VIEW_PRODUCT_FOR_STAFF_LIST_SUCCESS,
} from "../constants/productConstant";

/**
 * This reducer is implemented to
 * to get all draft products
 * by supplier
 */

export const productListReducer = (state = { product: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true };
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, product: action.payload };
		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to create draft create by
 * supplier
 */

export const productCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_CREATE_REQUEST:
			return { loading: true };
		case PRODUCT_CREATE_SUCCESS:
			return { loading: false, success: true };
		case PRODUCT_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to delete products by
 * supplier
 */

export const productDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_DELETE_REQUEST:
			return { loading: true };
		case PRODUCT_DELETE_SUCCESS:
			return { loading: false, success: true };
		case PRODUCT_DELETE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to update products by
 * supplier
 */

export const productUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_UPDATE_REQUEST:
			return { loading: true };
		case PRODUCT_UPDATE_SUCCESS:
			return { loading: false, success: true };
		case PRODUCT_UPDATE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to view all products for
 * site manager
 */

export const viewProductListForSiteManagerReducer = (state = { product: [] }, action) => {
	switch (action.type) {
		case VIEW_PRODUCT_FOR_SITE_MANAGER_LIST_REQUEST:
			return { loading: true };
		case VIEW_PRODUCT_FOR_SITE_MANAGER_LIST_SUCCESS:
			return { loading: false, product: action.payload };
		case VIEW_PRODUCT_FOR_SITE_MANAGER_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to view all products for
 * staff
 */

export const viewProductListForStaffReducer = (state = { product: [] }, action) => {
	switch (action.type) {
		case VIEW_PRODUCT_FOR_STAFF_LIST_REQUEST:
			return { loading: true };
		case VIEW_PRODUCT_FOR_STAFF_LIST_SUCCESS:
			return { loading: false, product: action.payload };
		case VIEW_PRODUCT_FOR_STAFF_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
