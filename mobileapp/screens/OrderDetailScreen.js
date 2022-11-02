import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { ListItem, Icon, Button } from "@rneui/themed";
import orderservice from "../services/orderservice";
import { convertToTitleCase } from "../services/utils";

const OrderDetailScreen = ({ route }) => {
	//initial state
	const [order, setOrder] = useState({});

	//use effect hook
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

	//render screen
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
