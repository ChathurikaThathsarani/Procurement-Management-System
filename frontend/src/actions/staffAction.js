/*
 *These are the front end actions to
 *manage a staff account these frontend actions calls the backend routes and then these
 *actions connect frontend and backend
 */
import {
	STAFF_LOGIN_FAIL,
	STAFF_LOGIN_REQUEST,
	STAFF_LOGIN_SUCCESS,
	STAFF_LOGOUT,
	STAFF_REGISTER_FAIL,
	STAFF_REGISTER_REQUEST,
	STAFF_REGISTER_SUCCESS,
} from "../constants/staffConstant";
import axios from "axios";
import swal from "sweetalert";

/**
 * This action is implemented to
 * to login a staff member to their account
 */
export const staffLogin = (nic, password) => async (dispatch) => {
	try {
		dispatch({ type: STAFF_LOGIN_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post("/user/staff/login", { nic, password }, config);

		dispatch({ type: STAFF_LOGIN_SUCCESS, payload: data });
		swal({
			title: "Success !!!",
			text: "Procurement Staff In Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});
		setTimeout(function () {
			window.location.href = "/staff";
		}, 2000);
		localStorage.setItem("staffInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: STAFF_LOGIN_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

/**
 * This action is implemented to
 * to pass the access permission to the do the other functionalities
 */
export function authHeader() {
	let staff = JSON.parse(localStorage.getItem("staffInfo"));

	if (staff && staff.token) {
		return { Authorization: `Bearer ${staff.token}` };
	} else {
		return {};
	}
}

/**
 * This action is implemented to
 * to log out a staff member from the account
 */
export const staffLogout = () => async (dispatch) => {
	localStorage.removeItem("staffInfo");
	dispatch({ type: STAFF_LOGOUT });
};

/**
 *This action is implemented to
 *create a new staff member account
 */
export const staffRegister =
	(staffId, name, dob, nic, telephone, address, email, password, pic, qualifications, experience) =>
	async (dispatch) => {
		try {
			dispatch({ type: STAFF_REGISTER_REQUEST });

			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};

			const { data } = await axios.post(
				`/user/staff/register`,
				{
					staffId,
					name,
					dob,
					nic,
					telephone,
					address,
					email,
					password,
					pic,
					qualifications,
					experience,
				},
				config
			);

			dispatch({ type: STAFF_REGISTER_SUCCESS, payload: data });
			swal({
				title: "Success !!!",
				text: "Staff Registration Successful.",
				icon: "success",
				timer: 2000,
				button: false,
			});

			setTimeout(function () {
				window.location.href = "/staff";
			}, 2000);
		} catch (error) {
			dispatch({
				type: STAFF_REGISTER_FAIL,
				payload: error.response && error.response.data.message ? error.response.data.message : error.message,
			});
		}
	};
