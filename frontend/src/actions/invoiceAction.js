import {
	INVOICE_LIST_REQUEST,
	INVOICE_LIST_SUCCESS,
	INVOICE_LIST_FAIL,
	INVOICE_CREATE_REQUEST,
	INVOICE_CREATE_SUCCESS,
	INVOICE_CREATE_FAIL,
} from "../constants/invoiceConstant";
import axios from "axios";
import swal from "sweetalert";

export const listInvoice = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: INVOICE_LIST_REQUEST,
		});

		const {
			staff_Login: { staffInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${staffInfo.token}`,
			},
		};
		const { data } = await axios.get(`/user/staff/invoices`, config);

		dispatch({
			type: INVOICE_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: INVOICE_LIST_FAIL,
			payload: message,
		});
	}
};

export const createInvoiceAction =
	(orderNo, bank, branch, accountNumber, depositAmount, depositDate) => async (dispatch, getState) => {
		try {
			dispatch({
				type: INVOICE_CREATE_REQUEST,
			});

			const {
				staff_Login: { staffInfo },
			} = getState();

			const config = {
				headers: {
					Authorization: `Bearer ${staffInfo.token}`,
				},
			};
			const { data } = await axios.post(
				`/user/staff/invoice/create`,
				{ orderNo, bank, branch, accountNumber, depositAmount, depositDate },
				config
			);
			swal({
				title: "Success !!!",
				text: "Invoice successfully created.",
				icon: "success",
				timer: 2000,
				button: false,
			});

			setTimeout(function () {
				window.location.href = "/invoices";
			}, 2000);
			dispatch({
				type: INVOICE_CREATE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			const message = error.response && error.response.data.message ? error.response.data.message : error.message;
			dispatch({
				type: INVOICE_CREATE_FAIL,
				payload: message,
			});
		}
	};
