import React, { useState, createRef } from "react";
import {
	TextInput,
	View,
	Text,
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import authenticationservice from "../services/authservice";

import Loader from "./components/Loader";
import { authstyles } from "./components/styles";
import SuccesScreen from "./components/SuccesScreen";

const RegisterScreen = (props) => {
	const [nic, setNic] = useState("");
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userDob, setUserDob] = useState("");
	const [userAddress, setUserAddress] = useState("");
	const [gender, setGender] = useState("");
	const [telephone, setTelephone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [experience, setExperience] = useState("");

	const [loading, setLoading] = useState(false);
	const [errortext, setErrortext] = useState("");
	const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

	const nameInputRef = createRef();
	const emailInputRef = createRef();
	const dobInputRef = createRef();
	const addressInputRef = createRef();
	const nicInputRef = createRef();
	const genderInputRef = createRef();
	const telephoneInputRef = createRef();
	const passwordInputRef = createRef();
	const confirmPasswordInputRef = createRef();
	const expInputRef = createRef();

	const handleSubmitButton = async () => {
		setErrortext("");
		if (!userName) {
			alert("Please fill Name");
			return;
		}
		if (!userEmail) {
			alert("Please fill Email");
			return;
		}
		if (!userDob) {
			alert("Please fill Age");
			return;
		}
		if (!userAddress) {
			alert("Please fill Address");
			return;
		}

		if (!nic) {
			alert("Please fill NIC");
			return;
		}
		if (!gender) {
			alert("Please fill Gender");
			return;
		}
		if (!userDob) {
			alert("Please fill Date of birth");
			return;
		}
		if (!telephone) {
			alert("Please fill Telephone");
			return;
		}
		if (!password) {
			alert("Please fill Password");
			return;
		}
		if (!confirmPassword) {
			alert("Please fill Confirm Password");
			return;
		}
		if (password != confirmPassword) {
			alert("Password and Confirm Password does not match");
			return;
		}
		if (!experience) {
			alert("Please fill Experience");
			return;
		}
		try {
			//Show Loader
			setLoading(true);

			res = await authenticationservice.register(
				userName,
				userDob,
				nic,
				gender,
				telephone,
				userAddress,
				userEmail,
				password,
				experience
			);

			//Hide Loader
			setLoading(false);

			setIsRegistraionSuccess(true);
			console.log("Registration Successful. Please Login to proceed");
		} catch (error) {
			setLoading(false);
			console.log(error);
			setErrortext("Registration Unsuccessful");
		}
	};
	if (isRegistraionSuccess) {
		return <SuccesScreen btname="Login Now" text="Registration Successful." nextScreen="LoginScreen" />;
	}
	return (
		<View style={authstyles.mainBody}>
			<Loader loading={loading} />
			<ScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{
					justifyContent: "center",
					alignContent: "center",
				}}
			>
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
				<KeyboardAvoidingView enabled>
					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(nic) => setNic(nic)}
							underlineColorAndroid="#f000"
							placeholder="Enter NIC"
							placeholderTextColor="#e0dede"
							autoCapitalize="sentences"
							returnKeyType="next"
							onSubmitEditing={() => nameInputRef.current && nameInputRef.current.focus()}
							blurOnSubmit={false}
						/>
					</View>
					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(UserName) => setUserName(UserName)}
							underlineColorAndroid="#f000"
							placeholder="Enter Name"
							placeholderTextColor="#e0dede"
							autoCapitalize="sentences"
							returnKeyType="next"
							onSubmitEditing={() => emailInputRef.current && emailInputRef.current.focus()}
							blurOnSubmit={false}
						/>
					</View>
					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(UserEmail) => setUserEmail(UserEmail)}
							underlineColorAndroid="#f000"
							placeholder="Enter Email"
							placeholderTextColor="#e0dede"
							keyboardType="email-address"
							ref={emailInputRef}
							returnKeyType="next"
							onSubmitEditing={() => dobInputRef.current && dobInputRef.current.focus()}
							blurOnSubmit={false}
						/>
					</View>
					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(dob) => setUserDob(dob)}
							underlineColorAndroid="#f000"
							placeholder="Enter Date of Birth"
							placeholderTextColor="#e0dede"
							keyboardType="date"
							ref={dobInputRef}
							returnKeyType="next"
							onSubmitEditing={() => genderInputRef.current && genderInputRef.current.focus()}
							blurOnSubmit={false}
						/>
					</View>

					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(gender) => setGender(gender)}
							underlineColorAndroid="#f000"
							placeholder="Enter Gender"
							placeholderTextColor="#e0dede"
							ref={genderInputRef}
							returnKeyType="next"
							onSubmitEditing={() => addressInputRef.current && addressInputRef.current.focus()}
							blurOnSubmit={false}
						/>
					</View>
					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(UserAddress) => setUserAddress(UserAddress)}
							underlineColorAndroid="#f000"
							placeholder="Enter Address"
							placeholderTextColor="#e0dede"
							autoCapitalize="sentences"
							ref={addressInputRef}
							returnKeyType="next"
							onSubmitEditing={() => passwordInputRef.current && passwordInputRef.current.focus()}
							blurOnSubmit={false}
						/>
					</View>

					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(pass) => setPassword(pass)}
							underlineColorAndroid="#f000"
							placeholder="Enter Password"
							placeholderTextColor="#e0dede"
							keyboardType="default"
							secureTextEntry={true}
							ref={passwordInputRef}
							returnKeyType="next"
							onSubmitEditing={() => confirmPasswordInputRef.current && confirmPasswordInputRef.current.focus()}
							blurOnSubmit={false}
						/>
					</View>

					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(conpass) => setConfirmPassword(conpass)}
							underlineColorAndroid="#f000"
							placeholder="Confirm Password"
							placeholderTextColor="#e0dede"
							keyboardType="default"
							secureTextEntry={true}
							ref={confirmPasswordInputRef}
							returnKeyType="next"
							onSubmitEditing={() => telephoneInputRef.current && telephoneInputRef.current.focus()}
							blurOnSubmit={false}
						/>
					</View>
					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(telephone) => setTelephone(telephone)}
							underlineColorAndroid="#f000"
							placeholder="Enter telephone"
							placeholderTextColor="#e0dede"
							autoCapitalize="sentences"
							ref={telephoneInputRef}
							returnKeyType="next"
							onSubmitEditing={Keyboard.dismiss}
							blurOnSubmit={false}
						/>
					</View>
					<View style={authstyles.SectionStyle}>
						<TextInput
							style={authstyles.inputStyle}
							onChangeText={(exp) => setExperience(exp)}
							underlineColorAndroid="#f000"
							placeholder="Enter Experience"
							placeholderTextColor="#e0dede"
							autoCapitalize="sentences"
							ref={expInputRef}
							returnKeyType="next"
							onSubmitEditing={Keyboard.dismiss}
							blurOnSubmit={false}
						/>
					</View>
					{errortext != "" ? <Text style={authstyles.errorTextStyle}> {errortext} </Text> : null}
					<TouchableOpacity style={authstyles.buttonStyle} activeOpacity={0.5} onPress={handleSubmitButton}>
						<Text style={authstyles.buttonTextStyle}>REGISTER</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</ScrollView>
		</View>
	);
};
export default RegisterScreen;
