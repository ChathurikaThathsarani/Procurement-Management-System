/*
 *These are the front end actions to
 *manage a site manager account these frontend actions calls the backend routes and then these
 *actions connect frontend and backend
 */
import {
	SITE_MANGER_LOGIN_FAIL,
	SITE_MANGER_LOGIN_REQUEST,
	SITE_MANGER_LOGIN_SUCCESS,
	SITE_MANGER_LOGOUT,
	SITE_MANAGER_REGISTER_FAIL,
	SITE_MANAGER_REGISTER_REQUEST,
	SITE_MANAGER_REGISTER_SUCCESS,
} from "../constants/siteManagerConstant";
import axios from "axios";
import swal from "sweetalert";

/**
 * This action is implemented to
 * to login a site manager to their account
 */
export const siteManagerLogin = (nic, password) => async (dispatch) => {
	try {
		dispatch({ type: SITE_MANGER_LOGIN_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post("/user/manager/login", { nic, password }, config);

		dispatch({ type: SITE_MANGER_LOGIN_SUCCESS, payload: data });
		swal({
			title: "Success !!!",
			text: "Site Manager Log In Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});
		setTimeout(function () {
			window.location.href = "/site-manager";
		}, 2000);
		localStorage.setItem("siteManagerInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: SITE_MANGER_LOGIN_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

/**
 * This action is implemented to
 * to pass the access permission to the do the other functionalities
 */
export function authHeader() {
	let siteManager = JSON.parse(localStorage.getItem("siteManagerInfo"));

	if (siteManager && siteManager.token) {
		return { Authorization: `Bearer ${siteManager.token}` };
	} else {
		return {};
	}
}

/**
 * This action is implemented to
 * to log out a site manager from the account
 */
export const siteMangerLogout = () => async (dispatch) => {
	localStorage.removeItem("siteManagerInfo");
	dispatch({ type: SITE_MANGER_LOGOUT });
};

/**
 *This action is implemented to
 *create a new site manager account
 */
export const siteManagerRegister =
	(siteManagerId, name, dob, nic, gender, telephone, address, email, password, pic, experience) => async (dispatch) => {
		try {
			dispatch({ type: SITE_MANAGER_REGISTER_REQUEST });

			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};

			const { data } = await axios.post(
				`/user/manager/register`,
				{
					siteManagerId,
					name,
					dob,
					nic,
					gender,
					telephone,
					address,
					email,
					password,
					pic,
					experience,
				},
				config
			);

			dispatch({ type: SITE_MANAGER_REGISTER_SUCCESS, payload: data });
			swal({
				title: "Success !!!",
				text: "Site Manager Registration Successful.",
				icon: "success",
				timer: 2000,
				button: false,
			});

			setTimeout(function () {
				window.location.href = "/staff";
			}, 2000);
		} catch (error) {
			dispatch({
				type: SITE_MANAGER_REGISTER_FAIL,
				payload: error.response && error.response.data.message ? error.response.data.message : error.message,
			});
		}
	};
