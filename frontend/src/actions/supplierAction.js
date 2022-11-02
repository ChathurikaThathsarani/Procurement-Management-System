/*
*These are the front end actions to 
*manage a supplier account these frontend actions calls the backend routes and then these 
*actions connect frontend and backend
*/
import {
	SUPPLIER_LOGIN_FAIL,
	SUPPLIER_LOGIN_REQUEST,
	SUPPLIER_LOGIN_SUCCESS,
	SUPPLIER_LOGOUT,
	SUPPLIER_REGISTER_FAIL,
	SUPPLIER_REGISTER_REQUEST,
	SUPPLIER_REGISTER_SUCCESS,
} from "../constants/supplierConstant";
import axios from "axios";
import swal from "sweetalert";

/**
 * This action is implemented to
 * to login a supplier to their account
 */
export const supplierLogin = (nic, password) => async (dispatch) => {
	try {
		dispatch({ type: SUPPLIER_LOGIN_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post("/user/supplier/login", { nic, password }, config);

		dispatch({ type: SUPPLIER_LOGIN_SUCCESS, payload: data });
		swal({
			title: "Success !!!",
			text: "Supplier Log In Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});
		setTimeout(function () {
			window.location.href = "/supplier";
		}, 2000);
		localStorage.setItem("supplierInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: SUPPLIER_LOGIN_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

/**
 * This action is implemented to
 * to pass the access permission to the do the other functionalities 
 */
export function authHeader() {
	let supplier = JSON.parse(localStorage.getItem("supplierInfo"));

	if (supplier && supplier.token) {
		return { Authorization: `Bearer ${supplier.token}` };
	} else {
		return {};
	}
}

/**
 * This action is implemented to
 * to log out a supplier from the account
 */
export const supplierLogout = () => async (dispatch) => {
	localStorage.removeItem("supplierInfo");
	dispatch({ type: SUPPLIER_LOGOUT });
};

/**
*This action is implemented to
*create a new supplier account
*/
export const supplierRegister =
	(
		supplierId,
		ownerName,
		dob,
		nic,
		gender,
		telephone,
		companyName,
		companyAddress,
		email,
		password,
		pic,
		suppliyingMaterials
	) =>
	async (dispatch) => {
		try {
			dispatch({ type: SUPPLIER_REGISTER_REQUEST });

			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};

			const { data } = await axios.post(
				`/user/supplier/register`,
				{
					supplierId,
					ownerName,
					dob,
					nic,
					gender,
					telephone,
					companyName,
					companyAddress,
					email,
					password,
					pic,
					suppliyingMaterials,
				},
				config
			);

			dispatch({ type: SUPPLIER_REGISTER_SUCCESS, payload: data });
			swal({
				title: "Success !!!",
				text: "Supplier Registration Successful.",
				icon: "success",
				timer: 2000,
				button: false,
			});

			setTimeout(function () {
				window.location.href = "/staff";
			}, 2000);
		} catch (error) {
			dispatch({
				type: SUPPLIER_REGISTER_FAIL,
				payload: error.response && error.response.data.message ? error.response.data.message : error.message,
			});
		}
	};
