import AsyncStorage from "@react-native-async-storage/async-storage";

export async function autheader() {
	let siteManager = JSON.parse(await AsyncStorage.getItem("@userdata"));

	if (siteManager && siteManager.token) {
		return {
			headers: {
				Authorization: `Bearer ${siteManager.token}`,
				"Content-type": "application/json",
			},
		};
	} else {
		return {
			headers: {
				"Content-type": "application/json",
			},
		};
	}
}

<<<<<<< HEAD
export const api_base_url = "http://192.168.1.144:5000/user/manager/";
=======
export const api_base_url = "http://192.168.1.100:5000/user/manager/";
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c

export async function getLoginUser() {
	let s = await AsyncStorage.getItem("@userdata");
	return JSON.parse(s);
}

export const convertToTitleCase = (text) => {
	const result = text.replace(/([A-Z])/g, " $1");
	const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
	return finalResult;
};
