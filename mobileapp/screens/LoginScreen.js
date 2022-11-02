import React, { useState, createRef } from "react";
import {
	TextInput,
	View,
	Text,
	ScrollView,
	Image,
	Keyboard,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";

import Loader from "./components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authenticationservice from "../services/authservice";
import { authstyles } from "./components/styles";

const LoginScreen = ({ navigation }) => {
<<<<<<< HEAD
=======
	//initial states
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [errortext, setErrortext] = useState("");

	const passwordInputRef = createRef();

<<<<<<< HEAD
=======
	//on submit method
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
	const handleSubmitPress = async () => {
		try {
			setErrortext("");
			if (!userEmail) {
				alert("Please fill Email");
				return;
			}
			if (!userPassword) {
				alert("Please fill Password");
				return;
			}
			setLoading(true);

			const data = await authenticationservice.login(userEmail, userPassword);
			setLoading(false);
			await AsyncStorage.setItem("@userdata", JSON.stringify(data));
			console.log(await AsyncStorage.getItem("@userdata"));
			navigation.replace("DrawerNavigationRoutes");
		} catch (error) {
			setErrortext("Please check your email id or password");
			console.log(error);
			console.log("here2");
			setLoading(false);
		}
	};

<<<<<<< HEAD
=======
	//render screen
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
	return (
		<View style={authstyles.mainBody}>
			<Loader loading={loading} />
			<ScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{
					flex: 1,
					justifyContent: "center",
					alignContent: "center",
				}}
			>
				<View>
					<KeyboardAvoidingView enabled>
						<View style={{ alignItems: "center" }}>
							<Image
								source={require("../Image/splash.png")}
								style={{
									width: "50%",
									height: 100,
									resizeMode: "contain",
									margin: 30,
								}}
							/>
						</View>
						<View style={authstyles.SectionStyle}>
							<TextInput
								style={authstyles.inputStyle}
								onChangeText={(UserEmail) => setUserEmail(UserEmail)}
								placeholder="Enter NIC" //dummy@abc.com
								placeholderTextColor="#e0dede"
								autoCapitalize="none"
								keyboardType="default"
								returnKeyType="next"
								onSubmitEditing={() => passwordInputRef.current && passwordInputRef.current.focus()}
								underlineColorAndroid="#f000"
								blurOnSubmit={false}
							/>
						</View>
						<View style={authstyles.SectionStyle}>
							<TextInput
								style={authstyles.inputStyle}
								onChangeText={(UserPassword) => setUserPassword(UserPassword)}
								placeholder="Enter Password"
								placeholderTextColor="#e0dede"
								keyboardType="default"
								ref={passwordInputRef}
								onSubmitEditing={Keyboard.dismiss}
								blurOnSubmit={false}
								secureTextEntry={true}
								underlineColorAndroid="#f000"
								returnKeyType="next"
							/>
						</View>
						{errortext != "" ? <Text style={authstyles.errorTextStyle}> {errortext} </Text> : null}
						<TouchableOpacity style={authstyles.buttonStyle} activeOpacity={0.5} onPress={handleSubmitPress}>
							<Text style={authstyles.buttonTextStyle}>LOGIN</Text>
						</TouchableOpacity>
						<Text style={authstyles.registerTextStyle} onPress={() => navigation.navigate("RegisterScreen")}>
							New Here ? Register
						</Text>
					</KeyboardAvoidingView>
				</View>
			</ScrollView>
		</View>
	);
};
export default LoginScreen;
