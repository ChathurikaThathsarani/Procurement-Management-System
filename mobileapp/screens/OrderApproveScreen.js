import React, { useEffect, useState } from "react";
import { ScrollView, Picker } from "react-native";
import { ListItem, Icon, Button } from "@rneui/themed";
import orderservice from "../services/orderservice";
import RNPickerSelect from "react-native-picker-select";
import SuccesScreen from "./components/SuccesScreen";
import { convertToTitleCase } from "../services/utils";
const OrderApproveScreen = ({ route, navigation }) => {
	const [order, setOrder] = useState({});

	const [selectedValue, setSelectedValue] = useState("Pending");
	const [aprovesuccess, setAprovesuccess] = useState(false);
	useEffect(() => {
		setOrder({});

		orderservice
			.getOrder(route.params.id)
			.then((data) => {
				const { _id, status, __v, ...rest } = data;
				setOrder(rest);
			})
			.catch((e) => console.log(e));
	}, []);
	if (aprovesuccess) {
		return (
			<SuccesScreen
				btname="Go to Orders"
				text="Approved Successfully."
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
					<ListItem.Title>Status</ListItem.Title>
				</ListItem.Content>
				<ListItem.Content right>
					<RNPickerSelect
						// selectedValue={selectedValue}
						value={selectedValue}
						onValueChange={(value) => setSelectedValue(value)}
						// value={selectedValue}
						items={[
							{ label: "Pending", value: "Pending" },
							{ label: "Approved", value: "Approved" },
							{ label: "Finished", value: "Finished" },
						]}
					/>
				</ListItem.Content>
			</ListItem>
			<Button
				onPress={async () => {
					try {
						await orderservice.approveOrder(route.params.id, selectedValue);
						setAprovesuccess(true);
					} catch (error) {
						console.log(error);
					}
				}}
				title="Approve"
				icon={{ name: "update", color: "white" }}
				buttonStyle={{ minWidth: "50%", backgroundColor: "#307ecc" }}
			/>
		</ScrollView>
	);
};

export default OrderApproveScreen;
