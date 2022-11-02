import React, { useEffect, useState } from "react";
import { ScrollView, TextInput, Alert } from "react-native";
import { ListItem, Icon, Button } from "@rneui/themed";
import orderservice from "../services/orderservice";
import RNPickerSelect from "react-native-picker-select";
import SuccesScreen from "./components/SuccesScreen";
import { convertToTitleCase } from "../services/utils";
const EditDraftScreen = ({ route, navigation }) => {
<<<<<<< HEAD
=======
	//initial states
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
	const [order, setOrder] = useState({});
	const [productlist, setProductlist] = useState([]);

	const [selectedValue, setSelectedValue] = useState("");
	const [qty, setQty] = useState(0);
	const [success, setSuccess] = useState(false);
<<<<<<< HEAD
	useEffect(() => {
		setOrder({});

		orderservice
			.getOrder(route.params.id)
			.then((data) => {
				const {
					_id,
					status,
					productQty,
					productName,
					totalPrice,
					supplierComment,
					deleiveryDate,
					orderNo,
					__v,
					updatedAt,
					...rest
				} = data;
				setOrder(rest);
			})
			.catch((e) => console.log(e));

		orderservice
			.getProductForOrder(route.params.id)
			.then((data) => {
				setProductlist(data);
			})
			.catch((e) => console.log(e));
	}, []);

	async function onSubmit() {
		try {
			console.log(selectedValue);
			if (selectedValue == "" || selectedValue == null) {
				Alert.alert("", "Select a product");
				return;
			}
			if (qty == 0) {
				Alert.alert("", "Enter quantity");
				return;
			}
			let product = productlist.find((item) => item.productName == selectedValue);
			let totalPrice = qty * product.productPrice;
			if (totalPrice >= 100000) {
				Alert.alert("", "Total Price is higher than 100000");
				return;
			}
			await orderservice.draftOrderToPending(route.params.id, selectedValue, qty);

			setSuccess(true);
		} catch (error) {
			console.log(error);
		}
	}

	if (success) {
		return (
			<SuccesScreen
				btname="Go to Draft Orders"
				text="Product details added to order successfully."
				nextScreen="DrawerNavigationRoutes"
				navigation={navigation}
			/>
		);
	}

	return (
		<ScrollView>
			{Object.entries(order).map(([key, value], i) => {
				return (
					<ListItem key={i} bottomDivider>
						<ListItem.Content>
							<ListItem.Title>{convertToTitleCase(key)}</ListItem.Title>
						</ListItem.Content>
						<ListItem.Content right>
							<ListItem.Title right style={{ color: "green" }}>
								{value}
							</ListItem.Title>
						</ListItem.Content>
					</ListItem>
				);
			})}

			<ListItem bottomDivider>
				<ListItem.Content>
					<ListItem.Title>Product Name</ListItem.Title>
				</ListItem.Content>
				<ListItem.Content right>
					<RNPickerSelect
						// selectedValue={selectedValue}
						value={selectedValue}
						onValueChange={(value) => setSelectedValue(value)}
						// value={selectedValue}
						items={productlist.map((item) => {
							return { label: item.productName, value: item.productName };
						})}
					/>
				</ListItem.Content>
			</ListItem>

			<ListItem bottomDivider>
				<ListItem.Content>
=======

	//use effect hook
	useEffect(() => {
		setOrder({});

		orderservice
			.getOrder(route.params.id)
			.then((data) => {
				const {
					_id,
					status,
					productQty,
					productName,
					totalPrice,
					supplierComment,
					deleiveryDate,
					orderNo,
					__v,
					updatedAt,
					...rest
				} = data;
				setOrder(rest);
			})
			.catch((e) => console.log(e));

		orderservice
			.getProductForOrder(route.params.id)
			.then((data) => {
				setProductlist(data);
			})
			.catch((e) => console.log(e));
	}, []);

	//onsubmit method
	async function onSubmit() {
		try {
			console.log(selectedValue);
			if (selectedValue == "" || selectedValue == null) {
				Alert.alert("", "Select a product");
				return;
			}
			if (qty == 0) {
				Alert.alert("", "Enter quantity");
				return;
			}
			let product = productlist.find((item) => item.productName == selectedValue);
			let totalPrice = qty * product.productPrice;
			if (totalPrice >= 100000) {
				Alert.alert("", "Total Price is higher than 100000");
				return;
			}
			await orderservice.draftOrderToPending(route.params.id, selectedValue, qty);

			setSuccess(true);
		} catch (error) {
			console.log(error);
		}
	}

	//render screen
	if (success) {
		return (
			<SuccesScreen
				btname="Go to Draft Orders"
				text="Product details added to order successfully."
				nextScreen="DrawerNavigationRoutes"
				navigation={navigation}
			/>
		);
	}

	return (
		<ScrollView>
			{Object.entries(order).map(([key, value], i) => {
				return (
					<ListItem key={i} bottomDivider>
						<ListItem.Content>
							<ListItem.Title>{convertToTitleCase(key)}</ListItem.Title>
						</ListItem.Content>
						<ListItem.Content right>
							<ListItem.Title right style={{ color: "green" }}>
								{value}
							</ListItem.Title>
						</ListItem.Content>
					</ListItem>
				);
			})}

			<ListItem bottomDivider>
				<ListItem.Content>
					<ListItem.Title>Product Name</ListItem.Title>
				</ListItem.Content>
				<ListItem.Content right>
					<RNPickerSelect
						// selectedValue={selectedValue}
						value={selectedValue}
						onValueChange={(value) => setSelectedValue(value)}
						// value={selectedValue}
						items={productlist.map((item) => {
							return { label: item.productName, value: item.productName };
						})}
					/>
				</ListItem.Content>
			</ListItem>

			<ListItem bottomDivider>
				<ListItem.Content>
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
					<ListItem.Title>Product Quantity</ListItem.Title>
				</ListItem.Content>
				<ListItem.Content right>
					<TextInput
						// style={styles.inputStyle}
						onChangeText={(val) => setQty(val)}
						placeholder="Enter quantuty" //dummy@abc.com
						placeholderTextColor="#8b9cb5"
						autoCapitalize="none"
						keyboardType="default"
						returnKeyType="next"
						underlineColorAndroid="#f000"
						blurOnSubmit={false}
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

export default EditDraftScreen;
