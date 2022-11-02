import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomSidebarMenu from "./components/CustomSidebarMenu";
import NavigationDrawerHeader from "./components/NavigationDrawerHeader";
import HomeScreen from "./HomeScreen";
import OrderListScreen from "./OrderListScreen";
import DraftOrderListScreen from "./DraftOrderListScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen">
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					title: "Home", //Set Header Title
					headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
					headerStyle: {
						backgroundColor: "#307ecc", //Set Header color
					},
					headerTintColor: "#fff", //Set Header text color
					headerTitleStyle: {
						fontWeight: "bold", //Set Header text style
					},
				}}
			/>
		</Stack.Navigator>
	);
};

const OrdersScreenStack = ({ navigation }) => {
	return (
		<Stack.Navigator
			initialRouteName="OrdersScreen"
			screenOptions={{
				headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
				headerStyle: {
					backgroundColor: "#307ecc", //Set Header color
				},
				headerTintColor: "#fff", //Set Header text color
				headerTitleStyle: {
					fontWeight: "bold", //Set Header text style
				},
			}}
		>
			<Stack.Screen
				name="OrdersScreen"
				component={OrderListScreen}
				options={{
					title: "Orders", //Set Header Title
				}}
			/>
		</Stack.Navigator>
	);
};

const DraftOrdersScreenStack = ({ navigation }) => {
	return (
		<Stack.Navigator
			initialRouteName="DraftOrdersScreen"
			screenOptions={{
				headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
				headerStyle: {
					backgroundColor: "#307ecc", //Set Header color
				},
				headerTintColor: "#fff", //Set Header text color
				headerTitleStyle: {
					fontWeight: "bold", //Set Header text style
				},
			}}
		>
			<Stack.Screen
				name="DraftOrdersScreen"
				component={DraftOrderListScreen}
				options={{
					title: "Draft Orders", //Set Header Title
				}}
			/>
		</Stack.Navigator>
	);
};

const DrawerNavigatorRoutes = (props) => {
	return (
		<Drawer.Navigator
			drawerContentOptions={{
				activeTintColor: "#cee1f2",
				color: "#cee1f2",
				itemStyle: { marginVertical: 5, color: "white" },
				labelStyle: {
					color: "#d8d8d8",
				},
			}}
			screenOptions={{ headerShown: false }}
			drawerContent={CustomSidebarMenu}
		>
			{/* <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: "Home" }}
        component={HomeScreenStack}
      /> */}
			<Drawer.Screen name="ordersScreenStack" options={{ drawerLabel: "Orders" }} component={OrdersScreenStack} />
			<Drawer.Screen
				name="draftOrdersScreenStack"
				options={{ drawerLabel: "Draft Orders" }}
				component={DraftOrdersScreenStack}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigatorRoutes;
