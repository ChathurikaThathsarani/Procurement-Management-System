import { StyleSheet } from "react-native";

export const authstyles = StyleSheet.create({
	mainBody: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#307ecc",
		alignContent: "center",
	},
	SectionStyle: {
		flexDirection: "row",
		height: 40,
		marginTop: 20,
		marginLeft: 35,
		marginRight: 35,
		margin: 10,
	},
	buttonStyle: {
		backgroundColor: "#1f578f",
		borderWidth: 0,
		color: "#FFFFFF",
		borderColor: "#dadae8",
		height: 40,
		alignItems: "center",
		borderRadius: 30,
		marginLeft: 35,
		marginRight: 35,
		marginTop: 20,
		marginBottom: 25,
	},
	buttonTextStyle: {
		color: "#FFFFFF",
		paddingVertical: 10,
		fontSize: 16,
	},
	inputStyle: {
		backgroundColor: "#307ecc",
		flex: 1,
		color: "white",
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: "#dadae8",
	},
	registerTextStyle: {
		color: "#FFFFFF",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 14,
		alignSelf: "center",
		padding: 10,
	},
	errorTextStyle: {
		color: "red",
		textAlign: "center",
		fontSize: 14,
	},
});
