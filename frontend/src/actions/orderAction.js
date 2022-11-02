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

import axios from "axios";
import swal from "sweetalert";

/**
 * This action is implemented to
 * to create draft order by
 * site manager
 */
export const createDraftOrderAction =
	(siteManagerId, placedDate, requiredDate, supplierName) => async (dispatch, getState) => {
		try {
			dispatch({
				type: DRAFT_ORDER_CREATE_REQUEST,
			});

			const {
				siteManager_Login: { siteManagerInfo },
			} = getState();

			const config = {
				headers: {
					Authorization: `Bearer ${siteManagerInfo.token}`,
				},
			};
			const { data } = await axios.post(
				`/user/manager/order/draft/create`,
				{
					siteManagerId,
					placedDate,
					requiredDate,
					supplierName,
				},
				config
			);
			swal({
				title: "Success !!!",
				text: "Draft Order successfully created.",
				icon: "success",
				timer: 2000,
				button: false,
			});

			setTimeout(function () {
				window.location.href = "/draft-orders";
			}, 2000);
			dispatch({
				type: DRAFT_ORDER_CREATE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const message = error.response && error.response.data.message ? error.response.data.message : error.message;
			dispatch({
				type: DRAFT_ORDER_CREATE_FAIL,
				payload: message,
			});
		}
	};

/**
 * This action is implemented to
 * to get all draft orders
 * by site manager
 */
export const listDraftOrders = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: DRAFT_ORDER_LIST_REQUEST,
		});

		const {
			siteManager_Login: { siteManagerInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${siteManagerInfo.token}`,
			},
		};

		const { data } = await axios.get(`/user/manager/orders/draft/${siteManagerInfo._id}`, config);

		dispatch({
			type: DRAFT_ORDER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: DRAFT_ORDER_LIST_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to delete draft order by
 * site manager
 */
export const deleteDraftOrderAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: DRAFT_ORDER_DELETE_REQUEST,
		});

		const {
			siteManager_Login: { siteManagerInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${siteManagerInfo.token}`,
			},
		};

		const { data } = await axios.delete(`/user/manager/order/draft/delete/${id}`, config);

		dispatch({
			type: DRAFT_ORDER_DELETE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: DRAFT_ORDER_DELETE_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to convert draft order to pending
 * order by
 * site manager
 */

export const draftOrderToPendingOrderAction = (id, productName, productQty) => async (dispatch, getState) => {
	try {
		dispatch({
			type: DRAFT_ORDER_TO_PENDING_REQUEST,
		});

		const {
			siteManager_Login: { siteManagerInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${siteManagerInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`/user/manager/order/pending/${id}`,
			{
				productName,
				productQty,
			},
			config
		);
		swal({
			title: "Success !!!",
			text: "Now Order is in Pending State.",
			icon: "success",
			timer: 2000,
			button: false,
		});

		setTimeout(function () {
			window.location.href = "/orders";
		}, 2000);

		dispatch({
			type: DRAFT_ORDER_TO_PENDING_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: DRAFT_ORDER_TO_PENDING_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to get all orders by
 * site manager
 */

export const listOrders = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: ORDER_LIST_REQUEST,
		});

		const {
			siteManager_Login: { siteManagerInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${siteManagerInfo.token}`,
			},
		};

		const { data } = await axios.get(`/user/manager/orders/${siteManagerInfo._id}`, config);

		dispatch({
			type: ORDER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: ORDER_LIST_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to convert pending order to
 * pending order by
 * site manager
 */

export const orderToApproveOrderAction = (id, status) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ORDER_TO_APPROVE_REQUEST,
		});

		const {
			siteManager_Login: { siteManagerInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${siteManagerInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`/user/manager/order/approved/${id}`,
			{
				status,
			},
			config
		);
		swal({
			title: "Success !!!",
			text: "Now Order is in Approve State.",
			icon: "success",
			timer: 2000,
			button: false,
		});

		setTimeout(function () {
			window.location.href = "/orders";
		}, 2000);

		dispatch({
			type: ORDER_TO_APPROVE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: ORDER_TO_APPROVE_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to get all order for
 * selected supplier
 */

export const supplierlistOrders = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: ORDER_LIST_SUPPLIER_REQUEST,
		});

		const {
			supplier_Login: { supplierInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${supplierInfo.token}`,
			},
		};

		const { data } = await axios.get(`/user/supplier/get-orders/${supplierInfo._id}`, config);

		dispatch({
			type: ORDER_LIST_SUPPLIER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: ORDER_LIST_SUPPLIER_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to convert approved order to
 * placed order by
 * supplier
 */

export const orderToPlacedOrderAction = (id, status, deleiveryDate, supplierComment) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ORDER_TO_PLACED_REQUEST,
		});

		const {
			supplier_Login: { supplierInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${supplierInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`/user/supplier/order-to-placed/${id}`,
			{
				status,
				deleiveryDate,
				supplierComment,
			},
			config
		);
		swal({
			title: "Success !!!",
			text: "Successfully Updated.",
			icon: "success",
			timer: 2000,
			button: false,
		});

		setTimeout(function () {
			window.location.href = "/supplier-orders";
		}, 2000);

		dispatch({
			type: ORDER_TO_PLACED_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: ORDER_TO_PLACED_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to get all placed orders by
 * staff
 */

export const placedlistOrders = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PLACED_ORDER_REQUEST,
		});

		const {
			staff_Login: { staffInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${staffInfo.token}`,
			},
		};

		const { data } = await axios.get(`/user/staff/placed-orders`, config);

		dispatch({
			type: PLACED_ORDER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: PLACED_ORDER_FAIL,
			payload: message,
		});
	}
};
export const getOrderStaffAction = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: STAFF_ORDER_LIST_REQUEST,
		});

		const {
			staff_Login: { staffInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${staffInfo.token}`,
			},
		};
		const { data } = await axios.get(`/user/staff/product-staff/get`, config);
		console.log(data);
		dispatch({
			type: STAFF_ORDER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: SRAFF_ORDER_LIST_FAIL,
			payload: message,
		});
	}
};

export const StaffOrderToApproveOrderAction = (id, status) => async (dispatch, getState) => {
	try {
		dispatch({
			type: STAFF_ORDER_APPROVE_REQUEST,
		});

		const {
			staff_Login: { staffInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${staffInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`/user/staff/product-staff/approve/${id}`,
			{
				status,
			},
			config
		);

		swal({
			title: "Success !!!",
			text: " Order status is changed",
			icon: "success",
			timer: 2000,
			button: false,
		});

		setTimeout(function () {
			window.location.href = "/staff-orders";
		}, 2000);

		dispatch({
			type: STAFF_ORDER_APPROVE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: STAFF_ORDER_APPROVE_FAIL,
			payload: message,
		});
	}
};
