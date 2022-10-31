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

export const supplierOrderListReducer = (
  state = { supplierOrders: [] },
  action
) => {
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

export const placedOrderListReducer = (
  state = { placedOrders: [] },
  action
) => {
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
