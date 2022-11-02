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

/**
 * This reducer is implemented to
 * to create a site
 * by staff
 */
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
/**
 * This reducer is implemented to
 * to view site list
 * by staff
 */
export const SiteListReducer = (state = { sites: [] }, action) => {
	switch (action.type) {
		case SITE_LIST_REQUEST:
			return { loading: true };
		case SITE_LIST_SUCCESS:
			return { loading: false, sites: action.payload };
		case SITE_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
/**
 * This reducer is implemented to
 * to update a site
 * by staff
 */
export const SiteUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case SITE_UPDATE_REQUEST:
			return { loading: true };
		case SITE_UPDATE_SUCCESS:
			return { loading: false, success: true };
		case SITE_UPDATE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};
/**
 * This reducer is implemented to
 * to delete a site
 * by staff
 */

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
