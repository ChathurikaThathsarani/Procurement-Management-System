import React, { useState, useEffect } from "react";
import { Alert, ScrollView, TextInput } from "react-native";
import { ListItem, Button } from "@rneui/themed";
import orderservice from "../services/orderservice";
import SuccesScreen from "./components/SuccesScreen";

import RNPickerSelect from "react-native-picker-select";

import DatePicker from "react-native-datepicker-2021";

const AddNewDraftScreen = ({ navigation }) => {
<<<<<<< HEAD
=======
	//initial states
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
	const [reqDate, setReqDate] = useState(null);
	const [placedDate, setPlacedDate] = useState(null);
	const [supname, setSupName] = useState("");
	const [suplist, setSuplist] = useState([]);

	const [success, setSuccess] = useState(false);

<<<<<<< HEAD
=======
	//use effect hook
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
	useEffect(() => {
		orderservice
			.getSuppliers()
			.then((data) => {
				setSuplist(data);
			})
			.catch((e) => console.log(e));
	}, []);

<<<<<<< HEAD
=======
	//submit method
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
	async function onSubmit() {
		try {
			if (supname == "") {
				Alert.alert("", "Enter the Supplier Name");
				return;
			}
			if (reqDate == null) {
				Alert.alert("", "Enter the Required Date");
				return;
			}
			if (placedDate == null) {
				Alert.alert("", "Enter the Placed Date");
				return;
			}
			await orderservice.addDraftOrder(
				supname,
				new Date(placedDate).toLocaleDateString(),
				new Date(reqDate).toLocaleDateString()
			);
			setSuccess(true);
		} catch (error) {
			console.log(error);
			Alert.alert(
				"Faliure",
				error.message,
				[
					{
						text: "Close",
						onPress: () => {
							return null;
						},
					},
				],
				{ cancelable: true }
			);
		}
	}

<<<<<<< HEAD
	if (success) {
		return (
			<SuccesScreen
				btname="Go to Draft Orders"
=======
	//render
	if (success) {
		return (
			<SuccesScreen
				btname="Go to Orders"
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
				text="New Draft order added successfully."
				nextScreen="DrawerNavigationRoutes"
				navigation={navigation}
			/>
		);
	}

	return (
		<ScrollView>
			<ListItem bottomDivider>
				<ListItem.Content>
					<ListItem.Title>Supplier Name</ListItem.Title>
				</ListItem.Content>
				<ListItem.Content right>
					<RNPickerSelect
						// selectedValue={selectedValue}
						value={supname}
						onValueChange={(value) => setSupName(value)}
						// value={selectedValue}
						items={suplist.map((item) => {
							return { label: item.companyName, value: item.companyName };
						})}
					/>
				</ListItem.Content>
			</ListItem>

			<ListItem bottomDivider>
				<ListItem.Content>
					<ListItem.Title>Placed Date</ListItem.Title>
				</ListItem.Content>
				<ListItem.Content right>
					<DatePicker
						// style={styles.datePickerStyle}
						date={placedDate}
						mode="date"
						placeholder="select date"
						format="DD/MM/YYYY"
						minDate="01-01-1900"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={{
							dateIcon: {
								position: "absolute",
								right: -5,
								top: 4,
								marginLeft: 0,
							},
							dateInput: {
								borderColor: "gray",
								alignItems: "flex-start",
								borderWidth: 0,
								borderBottomWidth: 1,
							},
							placeholderText: {
								fontSize: 17,
								color: "gray",
							},
							dateText: {
								fontSize: 17,
							},
						}}
						onDateChange={(date) => {
							setPlacedDate(date);
						}}
					/>
				</ListItem.Content>
			</ListItem>

			<ListItem bottomDivider>
				<ListItem.Content>
					<ListItem.Title>Required Date</ListItem.Title>
				</ListItem.Content>
				<ListItem.Content right>
					<DatePicker
						// style={styles.datePickerStyle}
						date={reqDate}
						mode="date"
						placeholder="select date"
						format="DD/MM/YYYY"
						minDate="01-01-1900"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={{
							dateIcon: {
								position: "absolute",
								right: -5,
								top: 4,
								marginLeft: 0,
							},
							dateInput: {
								borderColor: "gray",
								alignItems: "flex-start",
								borderWidth: 0,
								borderBottomWidth: 1,
							},
							placeholderText: {
								fontSize: 17,
								color: "gray",
							},
							dateText: {
								fontSize: 17,
							},
						}}
						onDateChange={(date) => {
							console.log(date);
							setReqDate(date);
						}}
					/>
				</ListItem.Content>
			</ListItem>

			<Button
				onPress={onSubmit}
				title="Submit"
				icon={{ name: "update", color: "white" }}
				buttonStyle={{ minWidth: "50%", backgroundColor: "#307ecc" }}
			/>
		</ScrollView>
	);
};

export default AddNewDraftScreen;
