import {
	DRAFT_ORDER_CREATE_REQUEST,
	DRAFT_ORDER_CREATE_SUCCESS,
	DRAFT_ORDER_CREATE_FAIL,
	DRAFT_ORDER_LIST_REQUEST,
	DRAFT_ORDER_LIST_SUCCESS,
	DRAFT_ORDER_LIST_FAIL,
	DRAFT_ORDER_DELETE_REQUEST,
	DRAFT_ORDER_DELETE_SUCCESS,
	DRAFT_ORDER_DELETE_FAIL,
	DRAFT_ORDER_TO_PENDING_REQUEST,
	DRAFT_ORDER_TO_PENDING_SUCCESS,
	DRAFT_ORDER_TO_PENDING_FAIL,
	ORDER_LIST_REQUEST,
	ORDER_LIST_SUCCESS,
	ORDER_LIST_FAIL,
	ORDER_TO_APPROVE_REQUEST,
	ORDER_TO_APPROVE_SUCCESS,
	ORDER_TO_APPROVE_FAIL,
	ORDER_LIST_SUPPLIER_REQUEST,
	ORDER_LIST_SUPPLIER_SUCCESS,
	ORDER_LIST_SUPPLIER_FAIL,
	ORDER_TO_PLACED_REQUEST,
	ORDER_TO_PLACED_SUCCESS,
	ORDER_TO_PLACED_FAIL,
	PLACED_ORDER_REQUEST,
	PLACED_ORDER_SUCCESS,
	PLACED_ORDER_FAIL,
	STAFF_ORDER_LIST_REQUEST,
	STAFF_ORDER_LIST_SUCCESS,
	SRAFF_ORDER_LIST_FAIL,
	STAFF_ORDER_APPROVE_REQUEST,
	STAFF_ORDER_APPROVE_SUCCESS,
	STAFF_ORDER_APPROVE_FAIL,
} from "../constants/orderConstant";

/**
 * This reducer is implemented to
 * to create draft order by
 * site manager
 */
export const draftOrderCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case DRAFT_ORDER_CREATE_REQUEST:
			return { loading: true };
		case DRAFT_ORDER_CREATE_SUCCESS:
			return { loading: false, success: true };
		case DRAFT_ORDER_CREATE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to get all draft orders
 * by site manager
 */

export const draftOrderListReducer = (state = { draftOrders: [] }, action) => {
	switch (action.type) {
		case DRAFT_ORDER_LIST_REQUEST:
			return { loading: true };
		case DRAFT_ORDER_LIST_SUCCESS:
			return { loading: false, draftOrders: action.payload };
		case DRAFT_ORDER_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to delete draft order by
 * site manager
 */

export const draftOrderDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case DRAFT_ORDER_DELETE_REQUEST:
			return { loading: true };
		case DRAFT_ORDER_DELETE_SUCCESS:
			return { loading: false, success: true };
		case DRAFT_ORDER_DELETE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to convert draft order to pending
 * order by
 * site manager
 */

export const draftOrderToPendingOrderReducer = (state = {}, action) => {
	switch (action.type) {
		case DRAFT_ORDER_TO_PENDING_REQUEST:
			return { loading: true };
		case DRAFT_ORDER_TO_PENDING_SUCCESS:
			return { loading: false, success: true };
		case DRAFT_ORDER_TO_PENDING_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to get all orders by
 * site manager
 */

export const OrderListReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case ORDER_LIST_REQUEST:
			return { loading: true };
		case ORDER_LIST_SUCCESS:
			return { loading: false, orders: action.payload };
		case ORDER_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to convert pending order to
 * pending order by
 * site manager
 */

export const orderToApproveReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_TO_APPROVE_REQUEST:
			return { loading: true };
		case ORDER_TO_APPROVE_SUCCESS:
			return { loading: false, success: true };
		case ORDER_TO_APPROVE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to get all order for
 * selected supplier
 */

export const supplierOrderListReducer = (state = { supplierOrders: [] }, action) => {
	switch (action.type) {
		case ORDER_LIST_SUPPLIER_REQUEST:
			return { loading: true };
		case ORDER_LIST_SUPPLIER_SUCCESS:
			return { loading: false, supplierOrders: action.payload };
		case ORDER_LIST_SUPPLIER_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to convert approved order to
 * placed order by
 * supplier
 */

export const orderToPlacedReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_TO_PLACED_REQUEST:
			return { loading: true };
		case ORDER_TO_PLACED_SUCCESS:
			return { loading: false, success: true };
		case ORDER_TO_PLACED_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};

/**
 * This reducer is implemented to
 * to get all placed orders by
 * staff
 */

export const placedOrderListReducer = (state = { placedOrders: [] }, action) => {
	switch (action.type) {
		case PLACED_ORDER_REQUEST:
			return { loading: true };
		case PLACED_ORDER_SUCCESS:
			return { loading: false, placedOrders: action.payload };
		case PLACED_ORDER_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
/**
 * This reducer is implemented to
 * to get all order list
 * by staff
 */

export const OrderStaffListReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case STAFF_ORDER_LIST_REQUEST:
			return { loading: true };
		case STAFF_ORDER_LIST_SUCCESS:
			return { loading: false, orders: action.payload };
		case SRAFF_ORDER_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
/**
 * This reducer is implemented to
 * to approve orders
 * by staff
 */
export const StaffOrderToApproveReducer = (state = {}, action) => {
	switch (action.type) {
		case STAFF_ORDER_APPROVE_REQUEST:
			return { loading: true };
		case STAFF_ORDER_APPROVE_SUCCESS:
			return { loading: false, success: true };
		case STAFF_ORDER_APPROVE_FAIL:
			return { loading: false, error: action.payload, success: false };

		default:
			return state;
	}
};
