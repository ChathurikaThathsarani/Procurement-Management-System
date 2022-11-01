import {
	PRODUCT_CREATE_FAIL,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
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
import axios from "axios";
import swal from "sweetalert";

export const listProductAction = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_LIST_REQUEST,
		});

		const {
			supplier_Login: { supplierInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${supplierInfo.token}`,
			},
		};

		const { data } = await axios.get(`user/supplier/supplier-products/${supplierInfo._id}`, config);

		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload: message,
		});
	}
};

export const createProductAction =
	(supplier, productName, productPrice, productDescription) => async (dispatch, getState) => {
		try {
			dispatch({ type: PRODUCT_CREATE_REQUEST });

			const {
				supplier_Login: { supplierInfo },
			} = getState();

			const config = {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${supplierInfo.token}`,
				},
			};

			const { data } = await axios.post(
				`user/supplier/product/create`,
				{
					supplier,
					productName,
					productPrice,
					productDescription,
				},
				config
			);

			dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
			swal({
				title: "Success !!!",
				text: "Product Details Submitted Successful.",
				icon: "success",
				timer: 2000,
				button: false,
			});
			setTimeout(function () {
				window.location.href = "/product-list";
			}, 2000);
		} catch (error) {
			dispatch({
				type: PRODUCT_CREATE_FAIL,
				payload: error.response && error.response.data.message ? error.response.data.message : error.message,
			});
		}
	};

export const updateProductAction =
	(id, supplier, productName, productPrice, productDescription) => async (dispatch, getState) => {
		try {
			dispatch({ type: PRODUCT_UPDATE_REQUEST });

			const {
				supplier_Login: { supplierInfo },
			} = getState();
			const config = {
				headers: {
					Authorization: `Bearer ${supplierInfo.token}`,
				},
			};
			const { data } = await axios.put(
				`/user/supplier/supplier-product/${id}`,
				{
					supplier,
					productName,
					productPrice,
					productDescription,
				},
				config
			);

			swal({
				title: "Success !!!",
				text: "Product Details Update Successful.",
				icon: "success",
				timer: 2000,
				button: false,
			});
			setTimeout(function () {
				window.location.href = "/product-list";
			}, 2000);

			dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
		} catch (error) {
			const message = error.response && error.response.data.message ? error.response.data.message : error.message;
			dispatch({
				type: PRODUCT_UPDATE_FAIL,
				payload: message,
			});
		}
	};

export const productDeleteAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_DELETE_REQUEST,
		});

		const {
			supplier_Login: { supplierInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${supplierInfo.token}`,
			},
		};

		const { data } = await axios.delete(`/user/supplier/supplier-product/${id}`, config);

		dispatch({
			type: PRODUCT_DELETE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = "Product Details Delete Failed !!!";
		dispatch({
			type: PRODUCT_DELETE_FAIL,
			payload: message,
		});
	}
};

export const viewProductForSiteManagerAction = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: VIEW_PRODUCT_FOR_SITE_MANAGER_LIST_REQUEST,
		});

		const {
			siteManager_Login: { siteManagerInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${siteManagerInfo.token}`,
			},
		};

		const { data } = await axios.get(`/user/manager/supplier/supplier_product?id=${siteManagerInfo._id}`, config);

		dispatch({
			type: VIEW_PRODUCT_FOR_SITE_MANAGER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: VIEW_PRODUCT_FOR_SITE_MANAGER_LIST_FAIL,
			payload: message,
		});
	}
};

export const viewProductForStaffAction = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: VIEW_PRODUCT_FOR_STAFF_LIST_REQUEST,
		});

		const {
			staff_Login: { staffInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${staffInfo.token}`,
			},
		};

		const { data } = await axios.get(`/user/staff/supplier_product?id=${staffInfo._id}`, config);

		dispatch({
			type: VIEW_PRODUCT_FOR_STAFF_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: VIEW_PRODUCT_FOR_STAFF_LIST_FAIL,
			payload: message,
		});
	}
};
