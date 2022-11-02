import {
	GOOD_RECEIPT_LIST_REQUEST,
	GOOD_RECEIPT_LIST_SUCCESS,
	GOOD_RECEIPT_LIST_FAIL,
	GOOD_RECEIPT_CREATE_REQUEST,
	GOOD_RECEIPT_CREATE_SUCCESS,
	GOOD_RECEIPT_CREATE_FAIL,
} from "../constants/goodReceiptConstant";

/**
 * This reducer is implemented to
 * to get all good receipts by
 * staff
 */

export const goodReceiptListReducer = (state = { goodReceipts: [] }, action) => {
	switch (action.type) {
		case GOOD_RECEIPT_LIST_REQUEST:
			return { loading: true };
		case GOOD_RECEIPT_LIST_SUCCESS:
			return { loading: false, goodReceipts: action.payload };
		case GOOD_RECEIPT_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to create good receipt by
 * staff
 */

export const goodReceiptCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case GOOD_RECEIPT_CREATE_REQUEST:
			return { loading: true };
		case GOOD_RECEIPT_CREATE_SUCCESS:
			return { loading: false, success: true };
		case GOOD_RECEIPT_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
