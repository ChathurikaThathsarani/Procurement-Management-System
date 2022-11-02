import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { ListItem, Icon, Button } from "@rneui/themed";
import orderservice from "../services/orderservice";
import { convertToTitleCase } from "../services/utils";

const OrderDetailScreen = ({ route }) => {
<<<<<<< HEAD
	const [order, setOrder] = useState({});

=======
	//initial state
	const [order, setOrder] = useState({});

	//use effect hook
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
	useEffect(() => {
		setOrder({});

		orderservice
			.getOrder(route.params.id)
			.then((data) => {
				const { _id, __v, ...rest } = data;
				setOrder(rest);
			})
			.catch((e) => console.log(e));
	}, []);

<<<<<<< HEAD
=======
	//render screen
>>>>>>> fc55f5cd625bb8826830242f9e488b9af06b776c
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
		</ScrollView>
	);
};

export default OrderDetailScreen;
