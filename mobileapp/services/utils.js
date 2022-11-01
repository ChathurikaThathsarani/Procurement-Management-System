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

export const api_base_url = "http://192.168.1.144:5000/user/manager/";

export async function getLoginUser() {
	let s = await AsyncStorage.getItem("@userdata");
	return JSON.parse(s);
}

export const convertToTitleCase = (text) => {
	const result = text.replace(/([A-Z])/g, " $1");
	const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
	return finalResult;
};
